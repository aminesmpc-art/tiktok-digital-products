import { describe, expect, it, vi } from "vitest";

vi.mock("stripe", () => {
  return {
    default: vi.fn().mockImplementation(() => ({
      checkout: {
        sessions: {
          create: vi.fn(async () => ({ url: "https://stripe.test/session" }))
        }
      }
    }))
  };
});

import { POST } from "../app/api/checkout/route";

const mockRequest = (body: any) =>
  new Request("http://localhost/api/checkout", { method: "POST", body: JSON.stringify(body) });

describe("checkout POST", () => {
  it("returns a demo url without stripe secret", async () => {
    const res = await POST(mockRequest({ slug: "tiktok-scripts-swipefile", successUrl: "/thanks" }));
    const data = await res.json();
    expect(data.url).toContain("/thanks");
  });

  it("calls stripe when secret present", async () => {
    process.env.STRIPE_SECRET_KEY = "sk_test";
    const res = await POST(mockRequest({ slug: "tiktok-scripts-swipefile" }));
    const data = await res.json();
    expect(data.url).toContain("stripe.test");
  });
});
