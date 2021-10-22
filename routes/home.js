const express = require("express");
const { COOKIE_BASES, COOKIE_ADDONS } = require("../data/cookies-data");
const { handlebarsHelper } = require("../handlebars-helper");

const homeRouter = express.Router();

homeRouter.get("/", (req, res) => {
  const { cookieBase } = req.cookies;
  const sum =
    (cookieBase
      ? handlebarsHelper.findPrice(Object.entries(COOKIE_BASES), cookieBase)
      : 0) +
    ["coconut", "honey"].reduce(
      (prev, curr) =>
        prev + handlebarsHelper.findPrice(Object.entries(COOKIE_ADDONS), curr),
      0
    );

  res.render("home/index", {
    cookie: {
      base: cookieBase,
      addons: ["coconut", "honey"],
    },
    bases: Object.entries(COOKIE_BASES),
    addons: Object.entries(COOKIE_ADDONS),
    sum,
  });
});

module.exports = {
  homeRouter,
};
