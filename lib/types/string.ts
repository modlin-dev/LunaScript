export class utf8 extends String {
  /** Returns a bigint representation of a string. */
  toBigInt(): bigint {
    return BigInt(Number(this));
  }

  /** Returns a boolean representation of a string. */
  toBoolean(): boolean {
    return Boolean(this);
  }

  /** Returns a Function representation of a string. */
  toFunction(): () => string {
    return () => String(this);
  }

  /** Returns a number representation of a string. */
  toNumber(): number {
    return Number(this);
  }

  /** Returns a object representation of a string. */
  toObject(): object {
    return Object(this);
  }

  /** Returns a symbol representation of a string. */
  toSymbol(): symbol {
    return Symbol(String(this));
  }

  /** Returns a undefined representation of a string. */
  toUndefined(): undefined {
    return undefined;
  }
}
new utf8("Hello World");