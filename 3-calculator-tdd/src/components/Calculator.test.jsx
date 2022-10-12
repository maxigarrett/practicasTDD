import { cleanup, getByRole, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Calculator, numbers, operations } from "./Calculator";
import userEvent from "@testing-library/user-event";
describe("Calculator", () => {
  afterEach(cleanup);
  it("should render calculator", () => {
    render(<Calculator />);
    screen.getByText("Calculator");
  });

  it("should render numbers 0 to 9 ", () => {
    render(<Calculator />);
    numbers.forEach((num) => screen.getByText(num));
  });

  it("should render 4 rows of numbers", () => {
    render(<Calculator />);

    const rows = screen.getAllByRole("row");
    expect(rows.length).toBe(4);
  });

  it("should render operation", () => {
    render(<Calculator />);
    operations.forEach((operation) => screen.getByText(operation));
  });

  it("should render equalSing", () => {
    render(<Calculator />);
    screen.getByText("=");
  });

  it("should render input", () => {
    render(<Calculator />);

    screen.getByRole("textbox");
  });

  it("should render number in the input after user clicking a number", async () => {
    render(<Calculator />);

    const one = screen.getByText("1");

    await userEvent.click(one);

    const input = screen.getByRole("textbox");

    expect(input.value).toBe("1");
  });

  it("should render 123 when user clic several number", async () => {
    render(<Calculator />);

    const one = screen.getByText("1");
    await userEvent.click(one);
    const two = screen.getByText("2");
    await userEvent.click(two);
    const three = screen.getByText("3");
    await userEvent.click(three);

    const input = screen.getByRole("textbox");

    expect(input.value).toBe("123");
  });

  it("should show user input after clicking number  and operations", async () => {
    render(<Calculator />);
    const one = screen.getByText("1");
    await userEvent.click(one);

    const plus = screen.getByText("+");
    await userEvent.click(plus);
    await userEvent.click(one);

    const input = screen.getByRole("textbox");

    expect(input.value).toBe("1+1");
  });

  it("should calculates the operations matematically", async () => {
    render(<Calculator />);
    const one = screen.getByText("1");
    await userEvent.click(one);

    const plus = screen.getByText("+");
    await userEvent.click(plus);
    await userEvent.click(one);

    const equalSing = screen.getByText("=");
    await userEvent.click(equalSing);

    const input = screen.getByRole("textbox");

    expect(input.value).toBe("2");
  });
});
