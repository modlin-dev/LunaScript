import { bool } from "./types/boolean";
import { int16 } from "./types/number";
import { utf8 } from "./types/string";
import { int64 } from "./types/bigint";
import T from "@sinclair/typebox";

type Mirror<T> = {
	[P in keyof T]: T[P];
};

type Optional<T> = {
	[P in keyof T]?: T[P];
};

export const LS = {
	TypeCheck: ($: Record<any, any>, to: Record<any, any>) => {
		for (const type of getTypes(to)) {
			if (type.type === "bigint") LS.BigInt(atPath($, type.key));
			if (type.type === "boolean") LS.Boolean(atPath($, type.key));
			if (type.type === "function") LS.Function(atPath($, type.key));
			if (type.type === "number") LS.Number(atPath($, type.key));
			if (type.type === "object") LS.Object(atPath($, type.key));
			if (type.type === "string") LS.String(atPath($, type.key));
			if (type.type === "symbol") LS.Symbol(atPath($, type.key));
			if (type.type === "undefined") LS.Undefined(atPath($, type.key));
		}
	},
	isBigInt: ($: any): $ is bigint => typeof $ === "bigint",
	isBoolean: ($: any): $ is boolean => typeof $ === "boolean",
	isFunction: ($: any): $ is () => any => typeof $ === "function",
	isNumber: ($: any): $ is number => typeof $ === "number",
	isObject: ($: any): $ is object => typeof $ === "object",
	isArray: <T>($: any, _type?: T): $ is T[] => Array.isArray($),
	isString: ($: any): $ is string => typeof $ === "string",
	isSymbol: ($: any): $ is symbol => typeof $ === "symbol",
	isUndefined: ($: any): $ is undefined => typeof $ === "undefined",

	BigInt<T extends bigint>($: T): int64 {
		if ($) {
			if (LS.isBigInt($)) {
				return new int64($);
			}
			throw new TypeError(
				`LunaScript: Expected bigint, got ${typeof $} value ${$}`,
			);
		}
		return new int64(0n);
	},
	Boolean<T extends boolean>($: T): bool {
		if ($) {
			if (LS.isBoolean($)) {
				return new bool($);
			}
			throw new TypeError(
				`LunaScript: Expected boolean, got ${typeof $} value ${$}`,
			);
		}
		return new bool();
	},
	Function<T extends (...args: any[]) => any>($: T, types?: any[]) {
		if (LS.isFunction($)) {
			return (...args: Parameters<T>): ReturnType<T> => {
				if (types) {
					let at = 0;
					for (const arg of args) {
						LS.TypeCheck(arg, types[at]);
						at += 1;
					}
				}
				return $(...args);
			};
		}
		throw new TypeError(
			`LunaScript: Expected function, got ${typeof $} value ${$}`,
		);
	},
	Number<T extends number>($?: T): int16 {
		if ($) {
			if (LS.isNumber($)) {
				return new int16($);
			}
			throw new TypeError(
				`LunaScript: Expected number, got ${typeof $} value ${$}`,
			);
		}
		return new int16(0);
	},

	/**
	 * @param types Types are Experimental use JSDoc or TypeScript instead
	 * @returns
	 */
	Object<
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		T extends Record<string | number | symbol, any>,
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		P extends Record<string | number | symbol, any>,
	>(
		$: Mirror<T & Partial<P>>,
		_types?: {
			type: T;
			optional?: P;
		},
	): T & Partial<P> {
		return $;
	},

	Array<T>($: Mirror<T>[], _types?: T): T[] {
		if (LS.isArray($)) {
			return $;
		}
		throw new TypeError(
			`LunaScript: Expected string, got ${typeof $} value ${$}`,
		);
	},

	String<T extends string>($?: T): utf8 {
		if ($) {
			if (LS.isString($)) {
				return new utf8($);
			}
			throw new TypeError(
				`LunaScript: Expected string, got ${typeof $} value ${$}`,
			);
		}
		return new utf8();
	},

	Symbol: <T extends string | number>($: T) => {
		if (LS.isString($) || LS.isNumber($)) {
			return Symbol($);
		}
		throw new TypeError(
			`LunaScript: Expected symbol, got ${typeof $} value ${$}`,
		);
	},
	Undefined: <T extends undefined>($: T) => {
		if (LS.isUndefined($)) {
			return $;
		}
		throw new TypeError(
			`LunaScript: Expected undefined, got ${typeof $} value ${$}`,
		);
	},

	toBigInt: ($: string | number | bigint | boolean) => BigInt($),
	toBoolean: ($: any) => Boolean($),
	toFunction: (...$: string[]) => Function(...$),
	toNumber: ($: any) => Number($),
	toObject: ($: any) => Object($),
	toString: ($: any) => String($),
	toSymbol: ($: string | number | undefined) => Symbol($),
	toUndefined: ($: undefined) => undefined,

	Type<Type>($: Type) {
		if (typeof $ === "object") {
			if ($ === null) {
				return "null";
			}
			if (Array.isArray($)) {
				return "array";
			}
			if ($ instanceof RegExp) {
				return "regex";
			}
		}
		return typeof $;
	},
};

function* getTypes(
	$: Record<any, any>,
	parentKey = "",
): Generator<{ key: string; type: string }> {
	for (const key in $) {
		if ($.hasOwnProperty(key)) {
			const newKey = parentKey ? `${parentKey}.${key}` : key;
			if (typeof $[key] === "object" && $[key] !== null) {
				yield* getTypes($[key], newKey);
			} else {
				yield { key: newKey, type: typeof $[key] };
			}
		}
	}
}
function atPath(obj: any, path: string) {
	const parts = path.split(".");
	let current = obj;
	for (const part of parts) {
		if (current[part] === undefined) {
			return undefined;
		}
		current = current[part];
	}
	return current;
}
const func = LS.Function((a: string, b: string) => {
	return "Hello, world!";
});

func("10", "10");

const obj = LS.Object(
	{
		name: "John Cena",
		age: LS.Number(69),
	},
	{
		type: {
			name: String(),
		},
		optional: {
			age: LS.Number(),
		},
	},
);

const arr = LS.Array<{ hello: string }>([
	{
		hello: "Hello, world!",
	},
]);
