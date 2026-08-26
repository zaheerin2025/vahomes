"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, CalendarCheck } from "lucide-react";
import { SITE } from "@/lib/site";

export function MobileCtaBar() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      // show after scrolling past hero (approx 600px)
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
          <div className="border-t border-navy/5 bg-white/90 px-4 py-3 shadow-[0_-10px_30px_-15px_rgba(15,34,48,0.25)] backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <a
                href={SITE.phoneHref}
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-navy/10 bg-white py-3 text-sm font-bold text-navy transition-colors hover:border-brand/40 hover:text-brand"
              >
                <Phone className="size-4" />
                Call Now
              </a>
              <a
                href="#contact"
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#15C3A5] to-[#0A8F7C] py-3 text-sm font-bold text-white shadow-md transition-transform active:scale-[0.98]"
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
