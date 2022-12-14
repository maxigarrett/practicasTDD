import "@testing-library/jest-dom";

import { rest } from "msw";
import { afterAll, afterEach, beforeAll } from "vitest";
import { setupServer } from "msw/node";

import { pokemonResponse } from "./pokemon";

import "whatwg-fetch";

export const restHandlers = [
  rest.get("https://pokeapi.co/api/v2/pokemon", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(pokemonResponse));
  }),
];

const server = setupServer(...restHandlers);

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());
