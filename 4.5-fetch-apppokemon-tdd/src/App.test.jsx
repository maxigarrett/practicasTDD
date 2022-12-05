import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterAll, describe, expect, it } from "vitest";
import App from "./App";

describe("app", () => {
  afterAll(cleanup);
  it("should render pokeAPP", () => {
    render(<App />);
    const title = screen.getByText("pokeAPP");

    expect(title.textContent).toBe("pokeAPP");
  });

  //HACEMOS EL MOCK SI COMENTAMOS EL CODIGO DEL ARCHIVO SETUP DARA ERRORM PORque NO HARA EL MOCK
  it("should to be click and show bulbasour", async () => {
    render(<App />);

    const buttonGetPokemon = await screen.getByText("get pokemon");

    await fireEvent.click(buttonGetPokemon);

    const value = await screen.findByText("bulbasaur");

    expect(value.textContent).toBe("bulbasaur");
  });
});
