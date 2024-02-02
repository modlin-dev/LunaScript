class num16 extends Number {
  /** Returns a bigint representation of a number. */
  toBigInt(): bigint {
    return BigInt(this as any);
  }

  /** Returns a boolean representation of a number. */
  toBoolean(): boolean {
    return Boolean(this);
  }

  /** Returns a Function representation of a number. */
  toFunction(): Function {
    return Function(...(this as any));
  }

  /**
   * Returns a number representation of a number. */
  toNumber(): number {
    return Number(this);
  }

  /** Returns a object representation of a number. */
  toObject(): object {
    return Object(this);
  }

  /** Returns a symbol representation of a number. */
  toSymbol(): symbol {
    return Symbol(this as any);
  }

  /** Returns a undefined representation of a number. */
  toUndefined(): undefined {
    return undefined;
  }
}

export default num16;
