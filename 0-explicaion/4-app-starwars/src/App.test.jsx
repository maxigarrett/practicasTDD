import { afterEach, describe, it, expect } from "vitest";
// import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { render, screen, cleanup } from "@testing-library/react";
describe("App", () => {
  afterEach(cleanup);
  it("should render App", async () => {
    render(<App />);
    await screen.findByText("count is 0");
  });

  it("should render 1", async () => {
    render(<App />);
    await screen.findByText("count is 0");
    const button = screen.getByTestId("button");
    userEvent.click(button);
    await screen.findByText("count is 1");
  });
});
