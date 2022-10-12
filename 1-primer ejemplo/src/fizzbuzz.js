export const fizzbuzz = (number) => {
  if (typeof number !== "number")
    throw new Error("parameter provided must be a number");
  if (Number.isNaN(number))
    throw new Error("parameter provided must be a number");

  // refactorizacion de los IF
  const multiples = { 3: "fizz", 5: "buzz" };
  let output = "";
  Object.entries(multiples).forEach(([num, mess]) => {
    if (number % num === 0) return (output += mess);
  });

  return output === "" ? number : output;

  //   if (number % 15 === 0) return "fizzbuzz";
  //   if (number % 3 === 0) return "fizz";
  //   if (number % 5 === 0) return "buzz";

  //   return number;
};
