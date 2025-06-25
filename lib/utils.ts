/*
  lib/utils.ts
  Utility functions for combining class names (cn).
*/

/**
 * `cn` is a simple utility to merge Tailwind (or other) class names.
 * It accepts any number of arguments (string or undefined/null)
 * and concatenates truthy values separated by spaces.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
