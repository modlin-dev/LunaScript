// @ts-check
import { LS } from "../index";

const string = LS.String("Hello, world!");
const number = LS.Number(12379234);
const UserType = LS.Object({
  name: String(),
  password: Number(),
  email: String(),
});
const UserAuth = LS.Object({
  id: Number(),
  key: Number(),
  email: String(),
});

/**
 * @typedef {Object} UserTypes
 * @property {UserType} type
 * @property {UserAuth} auth
 */

const addUser = LS.Function(
  /**
   * @param {UserTypes} $
   * @returns {UserTypes}
   */
  ($) => {
    console.log($);
    return $;
  },
  [
    {
      type: UserType,
      auth: UserAuth,
    },
  ]
);
addUser({
  type: {
    name: "John Cena",
    password: 2374910,
    email: "andhisname@isjohn.cena",
  },
  auth: {
    id: 0,
    key: 0xfa739b,
    email: "H38nwo210!#f49k@example.com",
  },
});
