import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** height in px — width auto-scales to preserve aspect ratio */
  height?: number;
  /** show on dark backgrounds (keeps original colors) */
  onDark?: boolean;
  /** hide the wordmark text and show only the icon mark */
  iconOnly?: boolean;
};

/**
 * VA Home Cleaners — official brand logo.
 * Uses the real uploaded brand asset (VA monogram + "VA HOME CLEANERS" / "LIMPIEZA QUE TRANSFORMA").
 * Original aspect ratio 800:438.
 */
export function Logo({
  className,
  height = 40,
  onDark = false,
  iconOnly = false,
}: LogoProps) {
  return (
    <Image
      src="/va-logo.png"
      alt="VA Home Cleaners — Limpieza que transforma"
      width={800}
      height={438}
      priority
      className={cn("object-contain", onDark && "drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]", className)}
      style={{ height, width: "auto" }}
    />
  );
}

/**
 * Compact wordmark for tight spaces (mobile header).
 */
export function LogoCompact({ className, height = 34 }: { className?: string; height?: number }) {
  return (
    <Image
      src="/va-logo.png"
      alt="VA Home Cleaners"
      width={800}
      height={438}
      priority
      className={cn("object-contain", className)}
      style={{ height, width: "auto" }}
    />
  );
}
