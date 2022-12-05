import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { apiStarWars } from "./test/data";

describe("App", () => {
  afterEach(cleanup);

  it("should render app ", () => {
    render(<App />);
  });

  it("should render  title app star wars", () => {
    render(<App />);
    screen.getByText("App star wars");
  });

  it("should render text Luke Skywalker", async () => {
    render(<App />);
    // expect(screen.getByText("luke skywalker")).toBeInTheDocument(); cualquiera de estas dos formas es valida
    const value = await screen.findByText("Luke Skywalker");
    expect(value.textContent).toBe("Luke Skywalker");
  });

  // it("should show a list of character from a JSON file", async () => {
  //   render(<App />);
  //   apiStarWars.results.forEach((character) => {
  //     screen.findByText(character.name);
  //   });
  // });

  it("should render text error network if something goes wrong on the network ", () => {
    render(<App />);
    const value = screen.getByText("error network");
    expect(value.textContent).toBe("error network");
  });

  it("should render the features when clicking on the names ", async () => {
    render(<App />);
    const nameLukeSkywalker = await screen.findByText("Luke Skywalker");
    await userEvent.click(nameLukeSkywalker);

    const characteristic = await screen.findByText("masa : 77");

    expect(characteristic.textContent).toBe(characteristic.textContent);
  });
});
