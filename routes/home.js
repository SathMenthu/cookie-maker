const express = require("express");
const { COOKIE_BASES, COOKIE_ADDONS } = require("../data/cookies-data");

const homeRouter = express.Router();

homeRouter.get("/", (req, res) => {
  res.render("home/index", {
    cookie: {
      base: "dark",
      addons: ["coconut", "honey"],
    },
    bases: Object.entries(COOKIE_BASES),
    addons: Object.entries(COOKIE_ADDONS),
    // @TODO: We need something to know what are the prices of selected base and addons..
  });
});

module.exports = {
  homeRouter,
};
