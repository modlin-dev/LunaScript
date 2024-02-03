// @ts-check
import { int16 } from "../types/number";
import { utf8 } from "../types/string";
import { LS } from "../index";

const TBigInt = LS.BigInt(0n);
console.log("BigInt :", TBigInt);

const TBoolean = LS.Boolean(true);
console.log("Boolean :", TBoolean);

const TNumber = LS.Number(0);
console.log("Number :", TNumber);

/**
 * @type {{ name: utf8, age: int16 }}
 */
const json = LS.Object({
  name: LS.String("John Cena"),
  age: LS.Number(69),
});
console.log("Object :", json);

const TString = LS.String("false");
console.log("String :", TString);

const TSymbol = LS.Symbol("SI");
console.log("Symbol :", TSymbol);

const TUndefined = LS.Undefined(undefined);
console.log("Undefined :", TUndefined);

console.log(null);

/**
 * @param {any} $
 * @returns
 */
function $func($) {
  if (LS.isNumber($)) {
    return $;
  }
}
