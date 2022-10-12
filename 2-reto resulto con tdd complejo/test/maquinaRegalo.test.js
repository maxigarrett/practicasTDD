import { describe, expect, it } from "vitest";
import { maquinaRegalos } from "../src/maquinaReglaos";

describe("maquinaRegalos", () => {
  //contemplamos que no vengan vacias y que sea un string
  it("should throw if the first parameter is missing", () => {
    expect(() => maquinaRegalos()).throw();
  });
  it("should throw if the first parameter is not string", () => {
    expect(() => maquinaRegalos(2)).throw("is not a string");
  });

  it("should throw if the second parameter is missing", () => {
    expect(() => maquinaRegalos("a", "")).throw();
  });
  it("should throw if the second parameter is not string", () => {
    expect(() => maquinaRegalos(1, 1)).throw("is not a string");
  });

  it("should return a boolean", () => {
    expect(maquinaRegalos("b", "a")).toBeTypeOf("boolean");
  });
  it("should return false if string provided has diferent length", () => {
    expect(maquinaRegalos("ba", "a")).toBe(false);
  });
  it("should return false if strings provided have diferent length even  with same unque code", () => {
    expect(maquinaRegalos("aab", "ab")).toBe(false);
  });

  //testeamos que si hay letras repetidoas tire falso
  it("should return false if strings provided have diferent number of unique letters", () => {
    expect(maquinaRegalos("abc", "ddd")).toBe(false);
  });

  it("should return false if strings has different order  of tranformation", () => {
    expect(maquinaRegalos("MMM", "MID")).toBe(false);
  });
});
