const express = require("express");

class OrderRouter {
  constructor(cmapp) {
    this.cmapp = cmapp;
    this.router = express.Router();
    this.setUpRoutes();
  }

  setUpRoutes() {
    this.router.get("/summary", this.summary);
    this.router.get("/thanks", this.thanks);
  }

  summary = (req, res) => {
    const { base, addons, allBases, allAddons, sum } = getCookieSettings(req);

    res.render("order/summary", {
      cookie: {
        base,
        addons,
      },
      allBases,
      allAddons,
      sum,
    });
  };

  thanks = (req, res) => {
    const { sum } = getCookieSettings(req);

    res
      .clearCookie("cookieBase")
      .clearCookie("cookieAddons")
      .render("order/thanks", {
        sum,
      });
  };
}

module.exports = {
  OrderRouter,
};
