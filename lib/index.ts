export const LS = {
  isBigInt: ($: any) => (typeof $ === "bigint" ? true : false),
  isBoolean: ($: any) => (typeof $ === "boolean" ? true : false),
  isFunction: ($: any) => (typeof $ === "function" ? true : false),
  isNumber: ($: any) => (typeof $ === "number" ? true : false),
  isObject: ($: any) => (typeof $ === "object" ? true : false),
  isString: ($: any) => (typeof $ === "string" ? true : false),
  isSymbol: ($: any) => (typeof $ === "symbol" ? true : false),
  isUndefined: ($: any) => (typeof $ === "undefined" ? true : false),

  BigInt: <T extends bigint>($: T) => {
    if (typeof $ === "bigint") {
      return $;
    } else {
      throw new TypeError(
        `LunaScript: Expected bigint, got ${typeof $} value ${$}`
      );
    }
  },
  Boolean: <T extends boolean>($: T) => {
    if (typeof $ === "boolean") {
      return $;
    } else {
      throw new TypeError(
        `LunaScript: Expected boolean, got ${typeof $} value ${$}`
      );
    }
  },
  Function: <T extends (...args: any[]) => any>($: T) => {
    if (typeof $ === "function") {
      return (...args: Parameters<T>): ReturnType<T> => {
        args.forEach((value) => {
          if (value !== typeof)
        })
        return $(...args);
      };
    } else {
      throw new TypeError(
        `LunaScript: Expected function, got ${typeof $} value ${$}`
      );
    }
  },
  Number: <T extends number>($: T) => {
    if (typeof $ === "number") {
      return $;
    } else {
      throw new TypeError(
        `LunaScript: Expected number, got ${typeof $} value ${$}`
      );
    }
  },
  Object: <T extends Record<any, any>>($: T) => {
    if (typeof $ === "object") {
      return $;
    } else {
      throw new TypeError(
        `LunaScript: Expected object, got ${typeof $} value ${$}`
      );
    }
  },
  String: <T extends string>($: T) => {
    if (typeof $ === "string") {
      return $;
    } else {
      throw new TypeError(
        `LunaScript: Expected string, got ${typeof $} value ${$}`
      );
    }
  },
  Symbol: <T extends symbol>($: T) => {
    if (typeof $ === "symbol") {
      return $;
    } else {
      throw new TypeError(
        `LunaScript: Expected symbol, got ${typeof $} value ${$}`
      );
    }
  },
  Undefined: <T extends undefined>($: T) => {
    if (typeof $ === "symbol") {
      return $;
    } else {
      throw new TypeError(
        `LunaScript: Expected undefined, got ${typeof $} value ${$}`
      );
    }
  },

  toBigInt: ($: string | number | bigint | boolean) => BigInt($),
  toBoolean: ($: any) => Boolean($),
  toFunction: (...$: string[]) => Function(...$),
  toNumber: ($: any) => Number($),
  toObject: ($: any) => Object($),
  toString: ($: any) => String($),
  toSymbol: ($: string | number | undefined) => Symbol($),
  toUndefined: ($: undefined) => undefined,
};
