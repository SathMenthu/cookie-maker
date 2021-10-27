const { getAddonsFromReq } = require("./get-addons-from-req");
const { COOKIE_BASES, COOKIE_ADDONS } = require("../data/cookies-data");
const { handlebarsHelper } = require("./handlebars-helper");

function getCookieSettings(req) {
  const { cookieBase: base } = req.cookies;

  const addons = getAddonsFromReq(req);

  const allBases = Object.entries(COOKIE_BASES);
  const allAddons = Object.entries(COOKIE_ADDONS);

  const sum =
    (base ? handlebarsHelper.findPrice(allBases, base) : 0) +
    addons.reduce(
      (prev, curr) => prev + handlebarsHelper.findPrice(allAddons, curr),
      0
    );

  return {
    // Selected Stuff
    addons,
    base,

    // Calculations
    sum,

    //All possibilities
    allBases,
    allAddons,
  };
}

module.exports = {
  getCookieSettings,
};
