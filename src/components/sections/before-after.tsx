"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MoveHorizontal, Sparkles } from "lucide-react";
import { SectionHeading, SectionShell } from "@/components/site/section-heading";
import { Stagger, StaggerItem } from "@/components/site/reveal";

type Pair = {
  id: string;
  label: string;
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
};

const PAIRS: Pair[] = [
  {
    id: "living-room",
    label: "Living Room",
    before: "/images/before-living-room.png",
    after: "/images/after-living-room.png",
    beforeAlt: "Cluttered dusty living room before cleaning",
    afterAlt: "Spotless freshly cleaned living room after cleaning",
  },
  {
    id: "kitchen",
    label: "Kitchen",
    before: "/images/before-kitchen.png",
    after: "/images/after-kitchen.png",
    beforeAlt: "Messy dirty kitchen before cleaning",
    afterAlt: "Sparkling clean kitchen after professional deep cleaning",
  },
];

function CompareSlider({ pair }: { pair: Pair }) {
  const [pos, setPos] = React.useState(50);
  const ref = React.useRef<HTMLDivElement>(null);
  const dragging = React.useRef(false);

  const update = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  };

  React.useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!dragging.current) return;
      update(e.clientX);
    };
    const onUp = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="group relative aspect-[4/3] w-full cursor-ew-resize select-none overflow-hidden rounded-3xl ring-1 ring-navy/5 shadow-[0_20px_60px_-30px_rgba(15,34,48,0.45)]"
      onPointerDown={(e) => {
        dragging.current = true;
        update(e.clientX);
      }}
    >
      {/* After (full) */}
      <Image
        src={pair.after}
        alt={pair.afterAlt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="pointer-events-none object-cover"
      />
      <span className="absolute right-4 top-4 z-10 rounded-full bg-[#0A8F7C] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-white shadow-md">
        After
      </span>

      {/* Before (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <div className="relative h-full w-screen max-w-none">
          <Image
            src={pair.before}
            alt={pair.beforeAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <span className="absolute left-4 top-4 z-10 rounded-full bg-navy/80 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-white backdrop-blur">
          Before
        </span>
      </div>

      {/* Divider handle */}
      <div
        className="absolute inset-y-0 z-20 w-1 -translate-x-1/2 bg-white shadow-[0_0_0_1px_rgba(13,143,124,0.3)]"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute left-1/2 top-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-brand shadow-lg ring-4 ring-brand/15 transition-transform group-hover:scale-110">
          <MoveHorizontal className="size-5" />
        </div>
      </div>
    </div>
  );
}

export function BeforeAfter() {
  return (
    <SectionShell className="bg-gradient-to-b from-brand-soft/30 to-white">
      <SectionHeading
        eyebrow="Before & After"
        title={
          <>
            From Before to{" "}
            <span className="text-brand">Brilliant</span>
          </>
        }
        description="A professional clean can completely change the look and feel of a space. Drag the slider to see the transformation."
      />

      <Stagger className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
        {PAIRS.map((pair) => (
          <StaggerItem key={pair.id}>
            <div className="flex flex-col gap-4">
              <CompareSlider pair={pair} />
              <div className="flex items-center justify-center gap-2 text-sm font-semibold text-navy">
                <Sparkles className="size-4 text-brand" />
                {pair.label} Transformation
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </SectionShell>
  );
}
