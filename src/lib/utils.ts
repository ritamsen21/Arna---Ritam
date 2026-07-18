type ClassValue = string | number | null | false | undefined;

/**
 * Lightweight class name joiner. Filters out falsy values so conditional
 * Tailwind classes can be composed without pulling in an extra dependency.
 */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
