import { describe, expect, it } from "vitest";
import { formatPrice, getProductBySlug } from "../lib/utils";
import { products } from "@/content/data";

describe("formatPrice", () => {
  it("formats cents into USD", () => {
    expect(formatPrice(1999)).toBe("$19.99");
  });
});

describe("getProductBySlug", () => {
  it("finds product", () => {
    const slug = products[0].slug;
    expect(getProductBySlug(slug)?.id).toBe(products[0].id);
  });
});
