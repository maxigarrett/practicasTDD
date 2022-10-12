export const maquinaRegalos = (from, to) => {
  if (!from) throw new Error();
  if (typeof from !== "string") throw new Error("is not a string");
  if (!to) throw new Error();
  if (typeof to !== "string") throw new Error("is not a string");

  const isSameLength = from.length === to.length;
  if (!isSameLength) return false;

  //con Set sacamos las letras reptidas y con size dice en numero cuantas letras quedaron en cada
  //variable y comparamos para que devuleva un boolean
  const hasSameUniqueLetters = new Set(from).size === new Set(to).size;
  if (!hasSameUniqueLetters) return false;

  const tranformation = {};

  for (let i = 0; i < from.length; i++) {
    const fromLetter = from[i];
    const toLetter = to[i];

    if (tranformation[fromLetter]) {
      if (tranformation[fromLetter] !== toLetter) return false;
    } else tranformation[fromLetter] = toLetter;
  }

  return true;
};
