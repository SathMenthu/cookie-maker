const express = require("express");

const { getCookieSettings } = require("../utils/get-cookie-settings");

const homeRouter = express.Router();

homeRouter.get("/", (req, res) => {
  const { base, addons, allBases, allAddons, sum } = getCookieSettings(req);

  res.render("home/index", {
    cookie: {
      base,
      addons,
    },
    allBases,
    allAddons,
    sum,
  });
});

module.exports = {
  homeRouter,
};
