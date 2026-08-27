import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function assetPath(path: string): string {
  if (!path) return path;
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:") ||
    path.startsWith("tel:") ||
    path.startsWith("mailto:") ||
    path.startsWith("#")
  ) {
    return path;
  }
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (cleanPath.startsWith("/vahomes/")) return cleanPath;
  return `/vahomes${cleanPath}`;
}
