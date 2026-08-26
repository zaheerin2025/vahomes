import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const OUTPUT_DIR = path.join(process.cwd(), 'public', 'images');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

type ImageJob = {
  name: string;
  prompt: string;
  size: string;
};

const jobs: ImageJob[] = [
  {
    name: 'hero',
    size: '1344x768',
    prompt:
      'Professional female cleaner in a clean white uniform smiling and wiping a sparkling modern kitchen counter with a microfiber cloth, bright airy luxury home interior, large windows with natural sunlight streaming in, fresh green plants, marble countertops, stainless steel appliances, premium lifestyle photography, shallow depth of field, warm and inviting atmosphere, ultra realistic, high quality, editorial photography style',
  },
  {
    name: 'featured-deep-cleaning',
    size: '1344x768',
    prompt:
      'Beautiful bright modern living room freshly cleaned, pristine sofa with cushions, polished wooden floor reflecting light, large windows with sheer curtains, green potted plant, soft natural daylight, spotless surfaces, premium interior photography, calm and fresh atmosphere, ultra realistic, high quality',
  },
  {
    name: 'gallery-kitchen',
    size: '1344x768',
    prompt:
      'Sparkling clean luxury kitchen after professional cleaning, gleaming marble countertops, shining stainless steel appliances, spotless sink, organized countertop with a bowl of fresh fruit, bright natural light from large windows, premium interior photography, ultra realistic, high quality, editorial style',
  },
  {
    name: 'gallery-bathroom',
    size: '1344x768',
    prompt:
      'Pristine luxury bathroom after deep cleaning, sparkling clean white bathtub, shining chrome fixtures, spotless glass shower, folded white towels, small green plant, bright natural light, fresh and clean atmosphere, premium interior photography, ultra realistic, high quality',
  },
  {
    name: 'gallery-living-room',
    size: '1344x768',
    prompt:
      'Elegant modern living room freshly cleaned, stylish gray sofa with neat cushions, polished hardwood floor, coffee table with a vase of fresh flowers, large windows with natural light, clean rug, premium interior photography, ultra realistic, high quality, warm inviting atmosphere',
  },
  {
    name: 'gallery-dining-room',
    size: '1344x768',
    prompt:
      'Beautiful clean modern dining room, polished wooden dining table with neat place settings, stylish chairs, fresh flowers centerpiece, large window with natural light, spotless floor, premium interior photography, ultra realistic, high quality, elegant and fresh',
  },
  {
    name: 'gallery-office',
    size: '1344x768',
    prompt:
      'Clean professional modern office space after commercial cleaning, organized desks with computers, ergonomic chairs, large windows with city view, spotless floor, green plants, bright natural light, premium corporate interior photography, ultra realistic, high quality',
  },
  {
    name: 'gallery-airbnb',
    size: '1344x768',
    prompt:
      'Cozy stylish Airbnb apartment freshly cleaned and ready for guests, neatly made bed with white linens, small nightstand with lamp, clean wooden floor, large window with natural light, folded towels, warm welcoming atmosphere, premium interior photography, ultra realistic, high quality',
  },
  {
    name: 'before-living-room',
    size: '1344x768',
    prompt:
      'Messy cluttered living room before cleaning, dusty surfaces, scattered items on coffee table, cushions in disarray, dull lighting, visible dust and cobwebs, realistic documentary photography, slightly dim, authentic unkempt home interior',
  },
  {
    name: 'after-living-room',
    size: '1344x768',
    prompt:
      'Spotless freshly cleaned bright modern living room, perfectly arranged cushions on a stylish sofa, polished coffee table, clean floor, fresh flowers, bright natural daylight, fresh and airy atmosphere, premium interior photography, ultra realistic, high quality, sparkling clean',
  },
  {
    name: 'before-kitchen',
    size: '1344x768',
    prompt:
      'Messy dirty kitchen before cleaning, dirty dishes in sink, stained countertops, crumbs on floor, greasy stovetop, cluttered surfaces, dull lighting, realistic documentary photography, authentic unkempt kitchen interior',
  },
  {
    name: 'after-kitchen',
    size: '1344x768',
    prompt:
      'Sparkling clean luxury kitchen after professional deep cleaning, gleaming marble countertops, shining stainless steel appliances, spotless sink, polished stovetop, bright natural light, fresh and clean atmosphere, premium interior photography, ultra realistic, high quality, sparkling clean',
  },
  {
    name: 'service-deep-cleaning',
    size: '1024x1024',
    prompt:
      'Close up of professional cleaner hands wiping a sparkling clean marble kitchen counter with a microfiber cloth and eco-friendly spray, bright natural light, premium cleaning service photography, fresh and clean, ultra realistic, high quality, shallow depth of field',
  },
  {
    name: 'service-recurring',
    size: '1024x1024',
    prompt:
      'Professional cleaner in clean uniform vacuuming a bright modern living room with a modern vacuum cleaner, tidy home interior, natural daylight, premium service photography, ultra realistic, high quality, warm atmosphere',
  },
  {
    name: 'service-post-construction',
    size: '1024x1024',
    prompt:
      'Professional cleaner wiping dust from a newly renovated modern interior surface, construction cleanup, bright space with new windows and fresh paint, premium service photography, ultra realistic, high quality',
  },
  {
    name: 'service-commercial',
    size: '1024x1024',
    prompt:
      'Professional cleaner mopping the floor of a bright modern office space, clean desks and chairs in background, large windows with natural light, commercial cleaning service, premium photography, ultra realistic, high quality',
  },
  {
    name: 'service-eco-friendly',
    size: '1024x1024',
    prompt:
      'Eco-friendly cleaning products arranged on a clean marble counter, green spray bottles, natural plant leaves, microfiber cloths, bright natural light, fresh and natural atmosphere, premium product photography, ultra realistic, high quality, green and clean',
  },
  {
    name: 'service-hourly',
    size: '1024x1024',
    prompt:
      'Professional cleaner in clean uniform organizing and cleaning a bright modern home, holding cleaning supplies, natural daylight, premium service photography, friendly approachable, ultra realistic, high quality',
  },
  {
    name: 'about-team',
    size: '1344x768',
    prompt:
      'Two professional cleaners in clean white uniforms with green accents smiling confidently in a bright modern home, holding cleaning supplies, natural daylight, premium team photography, trustworthy and friendly, ultra realistic, high quality',
  },
];

async function generateOne(
  zai: Awaited<ReturnType<typeof ZAI.create>>,
  job: ImageJob
): Promise<void> {
  const outputPath = path.join(OUTPUT_DIR, `${job.name}.png`);
  if (fs.existsSync(outputPath)) {
    console.log(`[skip] ${job.name} already exists`);
    return;
  }
  try {
    console.log(`[start] ${job.name} (${job.size})`);
    const response = await zai.images.generations.create({
      prompt: job.prompt,
      size: job.size as any,
    });
    const imageBase64 = response.data[0].base64;
    const buffer = Buffer.from(imageBase64, 'base64');
    fs.writeFileSync(outputPath, buffer);
    console.log(`[done] ${job.name} -> ${outputPath} (${(buffer.length / 1024).toFixed(0)} KB)`);
  } catch (err: any) {
    console.error(`[fail] ${job.name}: ${err.message}`);
  }
}

async function main() {
  console.log(`Generating ${jobs.length} images into ${OUTPUT_DIR} ...`);
  const zai = await ZAI.create();
  // Run sequentially to avoid rate limits
  for (const job of jobs) {
    await generateOne(zai, job);
  }
  console.log('All image jobs finished.');
}

main().catch((e) => {
  console.error('Fatal:', e);
  process.exit(1);
});
