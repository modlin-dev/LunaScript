class $bool extends Boolean {
  /** Returns a bigint representation of a boolean. */
  toBigInt(): bigint {
    return BigInt(this as any);
  }

  /** Returns a boolean representation of a boolean. */
  toBoolean(): boolean {
    return Boolean(this);
  }

  /** Returns a Function representation of a boolean. */
  toFunction(): Function {
    return Function(...(this as any));
  }

  /**
   * Returns a number representation of a boolean. */
  toNumber(): number {
    return Number(this);
  }

  /** Returns a object representation of a boolean. */
  toObject(): object {
    return Object(this);
  }

  /** Returns a string representation of a boolean. */
  toString(): string {
    return String(this);
  }

  /** Returns a symbol representation of a boolean. */
  toSymbol(): symbol {
    return Symbol(this as any);
  }

  /** Returns a undefined representation of a boolean. */
  toUndefined(): undefined {
    return undefined;
  }
}

export default $bool;
