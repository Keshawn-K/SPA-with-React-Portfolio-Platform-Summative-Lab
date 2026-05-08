import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import App from "../App";

test("renders initial projects", () => {
  render(<App />);

  expect(screen.getByText(/Portfolio Website/i)).toBeInTheDocument();
  expect(screen.getByText(/E-Commerce App/i)).toBeInTheDocument();
});
