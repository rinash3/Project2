var db = require("../models");

module.exports = function (app) {
  //  for display page to shoe data
  app.get("/api/buddies", function (req, res) {
    db.Buddies.findAll({}).then(function (result) {
      // destination 
      // insterest
      // language
      // diet
      // perferred travel type


      // the list of people
      var myjson = [];
      var highestScore = 0;

      var me = result[result.length - 1];
      for (var i = 0; i < result.length - 1; i++) {
        var count = 0;
        var people = result[i];
        if (me.dest1 == people.dest1 || me.dest1 == people.dest2 || me.dest1 == people.dest3) {
          count++;
        };
        if (me.dest2 == people.dest1 || me.dest2 == people.dest2 || me.dest2 == people.dest3) {
          count++;
        };
        if (me.dest3 == people.dest1 || me.dest3 == people.dest2 || me.dest3 == people.dest3) {
          count++;
        };

        if (me.prefered_trip == people.prefered_trip) {
          count++;
        }
        // check interest
        var myintrests = me.intrests.split(',');
        var peopleintrests = people.intrests.split(',');
        var numberOfIntrest = 0;
        if (numberOfIntrest !== myintrests.length - 1) {
          for (j = 0; j < myintrests.length; j++) {
            if (myintrests[numberOfIntrest] == peopleintrests[j]) {
              count++;
            }
          }
          numberOfIntrest++;
        }

        // check language
        var mylanguage = me.language.split(',');
        var peoplelanguage = people.language.split(',');
        var numberOflanguage = 0;
        if (numberOflanguage !== mylanguage.length - 1) {
          for (a = 0; a < mylanguage.length; a++) {
            if (mylanguage[numberOflanguage] == peoplelanguage[a]) {
              count++;
            }
          }
          numberOflanguage++;
        }

        // check diet
        var mydiet = me.diet.split(',');
        var peoplediet = people.diet.split(',');
        var numberOfdiet = 0;
        if (numberOfdiet !== mydiet.length - 1) {
          for (b = 0; b < mydiet.length; b++) {
            if (mydiet[numberOfdiet] == peoplediet[b]) {
              count++;
            }
          }
          numberOfdiet++;
        }


        if (count > highestScore) {
          highestScore = count;
          myjson.unshift(result[i]);
        } else {
          myjson.push(result[i]);
          console.log("you are small");
        }
      }
      res.json(myjson);
    });
  });

  // for adding new person
  app.post("/api/buddies", function (req, res) {
    db.Buddies.create(req.body).then(function (result) {
      res.json(result);
    });
  });

  // for display a particular person on the profile page
  app.get("/api/buddies/:id", function (req, res) {
    db.Buddies.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (result) {
      console.log(result);
      res.json(result);
    });
  });

  app.put("/api/buddies", function (req, res, next) {
    console.log(req.body.id);
    db.Buddies.update(
      {
        description: req.body.description,
        past_travel: req.body.past_travel,
        person: req.body.person,
        name: req.body.name,
        age: req.body.age,
        prefered_trip: req.body.prefered_trip,
        intrests: req.body.intrests,
        dest1: req.body.dest1,
        dest2: req.body.dest2,
        dest3: req.body.dest3,
        country: req.body.country,
        language: req.body.language,
        must_see: req.body.must_see,
        password: req.body.password
      }, {
        where: { id: req.body.id }

      }).then(function (result) {
        console.log(result);
      }).catch(next)
  });
  // app.put("/api/buddies", function (req, res) {
  //   db.Buddies.update(req.body, {
  //     where: {
  //       id: req.body.id
  //     }
  //   }).then(function (result) {
  //     res.json(result);
  //     console.log(result);
  //   });
  // });
};
