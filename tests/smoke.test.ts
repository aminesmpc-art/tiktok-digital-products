import { describe, expect, it } from "vitest";
import HomePage from "../app/page";
import ProductsPage from "../app/products/page";

describe("pages render", () => {
  it("home is a function", () => {
    expect(typeof HomePage).toBe("function");
  });
  it("products is a function", () => {
    expect(typeof ProductsPage).toBe("function");
  });
});
