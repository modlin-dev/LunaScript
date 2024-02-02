// @ts-check
import { LS } from "./index";

const TBigInt = LS.BigInt(0n);
console.log("BigInt :", TBigInt);

const TBoolean = LS.Boolean(true);
console.log("Boolean :", TBoolean);

const TNumber = LS.Number(0);
console.log("Number :", TNumber);

const TString = LS.String("false");
console.log("String :", TString);

const TSymbol = LS.Symbol("SI");
console.log("Symbol :", TSymbol);
