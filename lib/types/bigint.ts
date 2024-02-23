export class int64 {
	constructor(public value: bigint) {}

	/**
	 * Returns a string representation of an object.
	 * @param radix Specifies a radix for converting numeric values to strings.
	 */
	toString = BigInt.prototype.toString;

	/** Returns a string representation appropriate to the host environment's current locale. */
	toLocaleString = BigInt.prototype.toLocaleString;

	/** Returns the primitive value of the specified object. */
	valueOf = BigInt.prototype.valueOf;

	readonly [Symbol.toStringTag] = BigInt.prototype[Symbol.toStringTag];

	/** Returns a boolean representation of a boolean. */
	toBoolean(): boolean {
		return Boolean(this.value);
	}

	/** Returns a Function representation of a boolean. */
	toFunction(): () => bigint {
		return () => this.value;
	}

	/**
	 * Returns a number representation of a boolean. */
	toNumber(): number {
		return Number(this.value);
	}

	/** Returns a object representation of a boolean. */
	toObject(): object {
		return Object(this.value);
	}

	/** Returns a symbol representation of a boolean. */
	toSymbol(): symbol {
		return Symbol(Number(this.value));
	}

	/** Returns a undefined representation of a boolean. */
	toUndefined(): undefined {
		return undefined;
	}
}
