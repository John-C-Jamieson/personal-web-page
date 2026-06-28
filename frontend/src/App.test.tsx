import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the name in the navigation", () => {
  render(<App />);
  expect(screen.getAllByText(/John Jamieson/i).length).toBeGreaterThan(0);
});
