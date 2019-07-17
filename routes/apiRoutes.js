var db = require("../models");

module.exports = function(app) {
  //  for display page to shoe data
  app.get("/api/buddies", function(req, res) {
    db.Buddies.findAll({}).then(function(result) {
      res.json(result);
    });
  });

  // for adding new person
  app.post("/api/buddies", function(req, res) {
    db.Buddies.create(req.body).then(function(result) {
      res.json(result);
    });
  });

  // for display a particular person on the profile page
  app.get("/api/buddies/:id", function(req, res) {
    db.Buddies.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      console.log(result);
      res.json(result);
    });
  });

  app.put("/api/posts", function(req, res) {
    db.Buddies.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });
};
