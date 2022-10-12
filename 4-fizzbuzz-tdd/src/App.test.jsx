import { render, screen, cleanup } from "@testing-library/react";
import { afterEach, describe, it } from "vitest";
import App, { fizzBuzz } from "./App";

describe("App", () => {
  afterEach(cleanup);
  it("should render App", () => {
    render(<App />);
  });
  it("should render App", () => {
    render(<App />);
    expect(typeof fizzBuzz).toBe("function");
  });

  it("should render throw if the nummber is 0", () => {
    expect(() => fizzBuzz(0)).toThrow("is not posible divide to 0");
  });

  it("should return 1 if is no other option is contemplated", () => {
    expect(fizzBuzz(1)).toBe(1);
  });
  it("should render fizz", () => {
    expect(fizzBuzz(3)).toBe("fizz");
  });
  it("should render buzz", () => {
    expect(fizzBuzz(5)).toBe("buzz");
  });
  it("should render fizzbuzz is divisible for 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("fizzbuzz");
  });
});
