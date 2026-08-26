"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ArrowUpRight, Camera } from "lucide-react";
import { SectionHeading, SectionShell } from "@/components/site/section-heading";
import { Stagger, StaggerItem } from "@/components/site/reveal";
import { PROJECTS, GALLERY_CATEGORIES, type Project } from "@/lib/site";
import { cn } from "@/lib/utils";

const CATEGORY_COLORS: Record<string, string> = {
  Residential: "bg-[#1A237E] text-white",
  Airbnb: "bg-[#6A1B9A] text-white",
  Commercial: "bg-[#C62828] text-white",
};

export function OurWork() {
  const [active, setActive] = React.useState<string>("All");
  const [lightbox, setLightbox] = React.useState<Project | null>(null);

  const filtered = React.useMemo(() => {
    if (active === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.category === active);
  }, [active]);

  return (
    <SectionShell id="work">
      <SectionHeading
        eyebrow="Our Work"
        title={
          <>
            See the Difference{" "}
            <span className="bg-gradient-to-r from-[#C62828] to-[#6A1B9A] bg-clip-text text-transparent">
              We Make
            </span>
          </>
        }
        description="Real results from real cleans — featuring our team in action and the sparkling spaces we leave behind."
      />

      {/* Category filter */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
        {GALLERY_CATEGORIES.map((cat) => {
          const count =
            cat === "All"
              ? PROJECTS.length
              : PROJECTS.filter((p) => p.category === cat).length;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={cn(
                "relative rounded-full px-5 py-2.5 text-sm font-semibold transition-all",
                active === cat
                  ? "text-white"
                  : "border border-navy/10 bg-white text-navy/70 hover:border-crimson/30 hover:text-crimson"
              )}
            >
              {active === cat ? (
                <motion.span
                  layoutId="gallery-active"
                  className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[#1A237E] to-[#0D1642] shadow-md"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              ) : null}
              {cat}
              <span
                className={cn(
                  "ml-2 rounded-full px-1.5 py-0.5 text-[0.65rem] font-bold",
                  active === cat ? "bg-white/20" : "bg-navy/5 text-muted-foreground"
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Uniform grid — featured cards span 2 cols on larger screens for visual rhythm */}
      <motion.div layout className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.button
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              type="button"
              onClick={() => setLightbox(project)}
              className={cn(
                "group relative block w-full overflow-hidden rounded-2xl text-left shadow-[0_10px_36px_-24px_rgba(13,22,66,0.4)] ring-1 ring-navy/5 transition-all duration-500 hover:shadow-[0_22px_50px_-26px_rgba(26,35,126,0.5)] hover:ring-crimson/20",
                project.featured ? "col-span-2 row-span-2" : "col-span-1"
              )}
            >
              <div
                className={cn(
                  "relative w-full overflow-hidden",
                  project.featured ? "aspect-square sm:aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[340px]" : "aspect-square"
                )}
              >
                <Image
                  src={project.image}
                  alt={`${project.title} — ${project.service}`}
                  fill
                  sizes={project.featured ? "(max-width: 640px) 100vw, 50vw" : "(max-width: 640px) 50vw, 25vw"}
                  className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/15 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

                {/* category chip */}
                <span
                  className={cn(
                    "absolute left-3 top-3 rounded-full px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-wider shadow-sm backdrop-blur sm:left-4 sm:top-4 sm:px-3 sm:py-1",
                    CATEGORY_COLORS[project.category] ?? "bg-white/95 text-navy"
                  )}
                >
                  {project.category}
                </span>

                {/* zoom icon */}
                <span className="absolute right-3 top-3 grid size-8 translate-y-1 place-items-center rounded-full bg-white/90 text-navy opacity-0 shadow transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:right-4 sm:top-4 sm:size-9">
                  <ZoomIn className="size-4" />
                </span>

                {/* caption */}
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5">
                  <p className="text-[0.6rem] font-semibold uppercase tracking-wider text-gold sm:text-[0.65rem]">
                    {project.service}
                  </p>
                  <h3 className="mt-0.5 flex items-center gap-1.5 font-heading text-sm font-bold text-white sm:mt-1 sm:text-lg">
                    {project.title}
                    <ArrowUpRight className="size-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 sm:size-4" />
                  </h3>
                </div>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Footer note */}
      <Stagger className="mt-10 flex flex-col items-center gap-3 text-center">
        <StaggerItem>
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <Camera className="size-4 text-gold" />
            Real photos from our team — actual results we&apos;re proud of.
          </p>
        </StaggerItem>
      </Stagger>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightbox(null)}
          >
            <div className="absolute inset-0 bg-navy/85 backdrop-blur-md" />
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close"
                onClick={() => setLightbox(null)}
                className="absolute right-4 top-4 z-20 grid size-10 place-items-center rounded-full bg-white/90 text-navy shadow-lg backdrop-blur transition-colors hover:bg-white hover:text-crimson"
              >
                <X className="size-5" />
              </button>
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={lightbox.image}
                  alt={`${lightbox.title} — ${lightbox.service}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 80vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 p-6">
                <div>
                  <span
                    className={cn(
                      "inline-flex items-center rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider",
                      CATEGORY_COLORS[lightbox.category] ?? "bg-gold-soft text-[#9B7B0E]"
                    )}
                  >
                    {lightbox.category}
                  </span>
                  <h3 className="mt-2 font-heading text-xl font-bold text-navy">
                    {lightbox.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {lightbox.service}
                  </p>
                </div>
                <a
                  href="/book"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#E53935] to-[#C62828] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5"
                >
                  Book Similar
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </SectionShell>
  );
}
