"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ArrowUpRight } from "lucide-react";
import { SectionHeading, SectionShell } from "@/components/site/section-heading";
import { PROJECTS, GALLERY_CATEGORIES, type Project } from "@/lib/site";
import { cn } from "@/lib/utils";

const spanClass: Record<Project["span"], string> = {
  wide: "sm:col-span-2 sm:row-span-1",
  tall: "sm:row-span-2",
  normal: "",
};

const aspectClass: Record<Project["span"], string> = {
  wide: "aspect-[16/9]",
  tall: "aspect-[3/4] sm:h-full",
  normal: "aspect-[4/3]",
};

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
        description="From detailed residential cleaning to professional commercial spaces, here are some examples of the work we do."
      />

      {/* Category filter */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
        {GALLERY_CATEGORIES.map((cat) => (
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
          </button>
        ))}
      </div>

      {/* Gallery grid */}
      <motion.div
        layout
        className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.button
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              type="button"
              onClick={() => setLightbox(project)}
              className={cn(
                "group relative block w-full overflow-hidden rounded-3xl text-left shadow-[0_12px_40px_-24px_rgba(13,22,66,0.4)] ring-1 ring-navy/5 transition-all duration-500 hover:shadow-[0_24px_60px_-28px_rgba(26,35,126,0.5)]",
                spanClass[project.span ?? "normal"]
              )}
            >
              <div className={cn("relative w-full overflow-hidden", aspectClass[project.span ?? "normal"])}>
                <Image
                  src={project.image}
                  alt={`${project.title} — ${project.service}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/15 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

                {/* category chip */}
                <span
                  className={cn(
                    "absolute left-4 top-4 rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider shadow-sm backdrop-blur",
                    CATEGORY_COLORS[project.category] ?? "bg-white/95 text-navy"
                  )}
                >
                  {project.category}
                </span>

                {/* zoom icon */}
                <span className="absolute right-4 top-4 grid size-9 translate-y-1 place-items-center rounded-full bg-white/90 text-navy opacity-0 shadow transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <ZoomIn className="size-4" />
                </span>

                {/* caption */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-gold">
                    {project.service}
                  </p>
                  <h3 className="mt-1 flex items-center gap-1.5 font-heading text-lg font-bold text-white">
                    {project.title}
                    <ArrowUpRight className="size-4 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </h3>
                </div>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

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
                  href="#contact"
                  onClick={() => setLightbox(null)}
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
