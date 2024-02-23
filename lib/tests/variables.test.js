// @ts-check
import { int16 } from "../types/number";
import { utf8 } from "../types/string";
import { int64 } from "../types/bigint";
import { bool } from "../types/boolean";
import { LS } from "../index";


/**
 * @type {int64}
 */
const TBigInt = LS.BigInt(0n);
console.log("BigInt :", TBigInt);

/**
 * @type {bool}
 */
const TBoolean = LS.Boolean(true);
console.log("Boolean :", TBoolean);

/**
 * @type {int16}
 */
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
