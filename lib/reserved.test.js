// @ts-check

// Modules
import module from "@modlin.dev/terminal/logger";

// Types
/** @type {bigint} */ (0n);

/** @type {boolean} */ (true);

/** @type {function} */ (() => {});

/** @type {number} */ (0);

/** @type {object} */ ({});

/** @type {string} */ ("Hello, world!");

/** @type {symbol} */ (Symbol("ES6 symbols are unique"));

/** @type {undefined} */ (undefined);

/** @type {any} */ (undefined);

// Variables
var $var = undefined;
const $const = undefined;
let $let = undefined;

// Functions & Classes & Promises
/** @param {any} argument */
async function $func(argument) {
  return argument;
}
class $class {
  constructor() {
    return this;
  }
}
new $class();

// General Utilities
if (undefined) {
  true;
} else {
  false;
}
undefined ? true : false;

try {
  await $func(undefined);
} catch {
  throw undefined;
}

// Error

// Exports
export default undefined;
export {};
