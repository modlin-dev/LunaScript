import { LS } from "./index";

const string = LS.String("Hello, world!");
const number = LS.Number(12379234);
const obj = LS.Object({
  name: String(),
  password: Number(),
  email: String(),
});
const addUser = LS.Function(
  /**
   * @param {typeof obj} $
   * @returns {typeof obj}
   */
  ($) => {
    LS.Object($);
    LS.String($.name);
    LS.Number($.password);
    LS.String($.email);

    return $;
  }
);
addUser({
  name: "John Cena",
  password: 0xffffff,
  email: "john@example.com",
});
