var db = require("../models");
var path = require("path");
module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Buddies.findAll({}).then(function () {
      res.sendFile(path.join(__dirname, "../public/html/index.html"));
    });
  });
  app.get("/signup", function (req, res) {
    db.Buddies.findAll({}).then(function (dbExamples) {
      res.render("example", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/signup", function (req, res) {
    db.Buddies.findAll({}).then(function () {
      res.sendFile(path.join(__dirname, "../public/html/signup.html"));
    });
  });
  app.get("/display", function (req, res) {
    db.Buddies.findAll({}).then(function (result) {
      res.render("friendsdisplay", {
        buddy: result
      });
    });
    app.get("/profile/", function (req, res) {
      db.Buddies.findOne({
        where: {
          id: req.params.id
        }
      }).then(function (result) {
        res.render("personalPage", {
          buddy: result
        });
      });
    });
    // Render 404 page for any unmatched routes
    app.get("*", function (req, res) {
      res.render("404");
    });
  });
};