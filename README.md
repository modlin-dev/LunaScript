# LunaScript

### JavaScript Libary for Types and TypeError for Bun

by [Hiroshi Modlin](https://github.com/modlin-dev)

## Installation

```bash
npm install @modlin.dev/lunascript ## Node.js
bun add @modlin.dev/lunascript ## Bun
```

## Examples

```js
import { LS } from "@modlin.dev/lunascript";

const int64 = LS.BigInt(0n);

const bool = LS.Boolean(true);

const int16 = LS.Number(0);

const 

const utf8 = LS.String("Hello, world");

const unique = LS.Symbol("LunaScript");

const bit0 = LS.Undefined(undefined);
```
