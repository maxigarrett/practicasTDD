import { describe, expect, it } from "vitest";
import { fizzbuzz } from "../src/fizzbuzz.js";
/*Escribe un programa que al pasarle numeros:
-Muestre "fizz" si es multiplo de 3.
-Muestre "buzz" si es multiplo de 5.
-Muestre "fizzbuzz" si es multiplo de 3 y 5.
-Mueste el numero si no es ninguna de las otras opciones.
*/

describe("fizzbuzz", () => {
  it("should be a funciontion", () => {
    expect(typeof fizzbuzz).toBe("function");
  });

  it("should throw an error if number is not provided as parameter ", () => {
    //expect(()=>fizzbuzz) ponemos una funcion anonima para que no se ejecute instantaneamente
    //si no que se ejecute si se lanza algun error
    expect(() => fizzbuzz()).toThrow();
  });

  it("should throw a especific Error message if number is not provided as parameter ", () => {
    expect(() => fizzbuzz()).toThrow("parameter provided must be a number"); //si le pasamos un string en el error de la funcion debemos poner el mismo mensaje
  });

  it("should throw a especific Error message if number is not provided as parameter ", () => {
    expect(() => fizzbuzz(NaN)).toThrow("parameter provided must be a number"); //si le pasamos un string en el error de la funcion debemos poner el mismo mensaje
  });

  // ---------------------------------------------------------------
  //-Mueste el numero si no es ninguna de las otras opciones. le pasamos cualquier otro numero que
  //no sea multiplo y lo msotrara por lo tanto 1 y 2 o 4 no dara error al poner en la funcion
  //que retorne simpre el numero que le pasemos por aprametros si no entra en ningun if
  it("should return 1 if number provided is 1", () => {
    expect(fizzbuzz(1)).toBe(1);
  });
  it("should return 2 if number provided is 2", () => {
    expect(fizzbuzz(2)).toBe(2);
  });
  //---------------------------------------------------------------

  it("should return fizz if number provided is 3", () => {
    expect(fizzbuzz(3)).toBe("fizz");
  });
  it("should return fizz if number provided is multiple of 3", () => {
    expect(fizzbuzz(6)).toBe("fizz");
    expect(fizzbuzz(9)).toBe("fizz");
    expect(fizzbuzz(12)).toBe("fizz");
  });

  it("should return buzz if number provided is  5", () => {
    expect(fizzbuzz(5)).toBe("buzz");
  });
  it("should return buzz if number provided is multiple of 5", () => {
    expect(fizzbuzz(10)).toBe("buzz");
    expect(fizzbuzz(25)).toBe("buzz");
    expect(fizzbuzz(20)).toBe("buzz");
  });

  it("should return fizzbuzz if number provided is multiple of 3 and 5", () => {
    expect(fizzbuzz(15)).toBe("fizzbuzz");
  });
});
