import { render, screen } from "@testing-library/react";
import HomePage from "../app/page";
import ProductsPage from "../app/products/page";

test("home renders hero copy", () => {
  render(<HomePage />);
  expect(screen.getByText(/Growth systems/)).toBeInTheDocument();
});

test("products list items", () => {
  render(<ProductsPage />);
  expect(screen.getByText(/Digital products/)).toBeInTheDocument();
});
