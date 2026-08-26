import { cn } from "@/lib/utils";

type LogoMarkProps = {
  className?: string;
  /** show the rounded brand tile background */
  withTile?: boolean;
};

/**
 * VA Home Cleaners — brand mark.
 * A house silhouette with a shine sparkle, representing a clean, fresh home.
 */
export function LogoMark({ className, withTile = true }: LogoMarkProps) {
  if (withTile) {
    return (
      <svg
        viewBox="0 0 48 48"
        className={cn("h-9 w-9", className)}
        role="img"
        aria-label="VA Home Cleaners logo"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="va-tile" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#13B89C" />
            <stop offset="1" stopColor="#0A8F7C" />
          </linearGradient>
        </defs>
        <rect width="48" height="48" rx="13" fill="url(#va-tile)" />
        {/* House silhouette */}
        <path
          d="M24 11.5L37 22.2V34.5A2.5 2.5 0 0 1 34.5 37h-21A2.5 2.5 0 0 1 11 34.5V22.2L24 11.5Z"
          fill="white"
        />
        {/* Door */}
        <path
          d="M21.4 37v-7.1a2.6 2.6 0 0 1 5.2 0V37h-5.2Z"
          fill="#0A8F7C"
        />
        {/* Sparkle */}
        <path
          d="M33.6 14.4c.3.9.6 1.5 1.2 2.1.6.6 1.2.9 2.1 1.2-.9.3-1.5.6-2.1 1.2-.6.6-.9 1.2-1.2 2.1-.3-.9-.6-1.5-1.2-2.1-.6-.6-1.2-.9-2.1-1.2.9-.3 1.5-.6 2.1-1.2.6-.6.9-1.2 1.2-2.1Z"
          fill="#FDE68A"
        />
        <path
          d="M14.4 25.2c.2.5.4.9.8 1.3.4.4.8.6 1.3.8-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3Z"
          fill="#0A8F7C"
          opacity="0.55"
        />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("h-9 w-9", className)}
      role="img"
      aria-label="VA Home Cleaners logo"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 11.5L37 22.2V34.5A2.5 2.5 0 0 1 34.5 37h-21A2.5 2.5 0 0 1 11 34.5V22.2L24 11.5Z"
        fill="currentColor"
      />
      <path
        d="M21.4 37v-7.1a2.6 2.6 0 0 1 5.2 0V37h-5.2Z"
        fill="white"
        opacity="0.85"
      />
      <path
        d="M33.6 14.4c.3.9.6 1.5 1.2 2.1.6.6 1.2.9 2.1 1.2-.9.3-1.5.6-2.1 1.2-.6.6-.9 1.2-1.2 2.1-.3-.9-.6-1.5-1.2-2.1-.6-.6-1.2-.9-2.1-1.2.9-.3 1.5-.6 2.1-1.2.6-.6.9-1.2 1.2-2.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

type LogoProps = {
  className?: string;
  /** text color for the wordmark */
  textClassName?: string;
  /** hide the wordmark (icon only) */
  iconOnly?: boolean;
};

export function Logo({ className, textClassName, iconOnly = false }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="h-9 w-9 shrink-0" />
      {!iconOnly && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-extrabold tracking-tight text-[1.05rem] text-navy",
              textClassName
            )}
          >
            VA Home Cleaners
          </span>
          <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-brand mt-0.5">
            Premium Cleaning
          </span>
        </span>
      )}
    </span>
  );
}
