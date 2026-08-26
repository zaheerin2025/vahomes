"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, CalendarCheck } from "lucide-react";
import { SITE } from "@/lib/site";

export function MobileCtaBar() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 30 }}
          className="fixed inset-x-0 bottom-0 z-40 lg:hidden"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <div className="border-t border-navy/5 bg-white/95 px-4 py-3 shadow-[0_-10px_30px_-15px_rgba(13,22,66,0.25)] backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <a
                href={SITE.phoneHref}
                className="flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-navy/15 bg-white py-3 text-sm font-bold text-navy transition-colors hover:border-[#1A237E] hover:bg-navy hover:text-white"
              >
                <Phone className="size-4" />
                Call Now
              </a>
              <a
                href="#contact"
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#E53935] to-[#C62828] py-3 text-sm font-bold text-white shadow-md transition-transform active:scale-[0.98]"
              >
                <CalendarCheck className="size-4" />
                Book Cleaning
              </a>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
