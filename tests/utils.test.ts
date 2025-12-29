import { describe, expect, it } from "vitest";
import { formatPrice, findProductBySlug } from "../lib/utils";

describe("formatPrice", () => {
  it("formats cents to currency", () => {
    expect(formatPrice(1900)).toBe("$19.00");
  });
});

describe("findProductBySlug", () => {
  it("returns product by slug", () => {
    const product = findProductBySlug("tiktok-scripts-swipefile");
    expect(product?.name).toContain("TikTok Hooks");
  });
});
