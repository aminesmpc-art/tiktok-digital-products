import { describe, expect, it } from "vitest";
import { createCheckoutSession, findItem } from "../lib/checkout";
import { products } from "@/content/data";

describe("findItem", () => {
  it("finds by slug fallback", () => {
    const item = findItem("missing", products[0].slug);
    expect(item?.id).toBe(products[0].id);
  });
});

describe("createCheckoutSession", () => {
  it("returns demo url without stripe key", async () => {
    const session = await createCheckoutSession({ priceId: products[0].id });
    expect(session.url).toContain("success");
  });
});
