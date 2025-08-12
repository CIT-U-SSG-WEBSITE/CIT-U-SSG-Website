// utils/ordinal.ts

/**
 * Returns the ordinal form of a number (e.g., 1 -> '1st', 2 -> '2nd', 3 -> '3rd', 4 -> '4th').
 * @param num The number to convert.
 * @returns The ordinal string.
 */
export function toOrdinal(num: number): string {
  const s = ["th", "st", "nd", "rd"], v = num % 100;
  return num + (s[(v - 20) % 10] || s[v] || s[0]);
}

