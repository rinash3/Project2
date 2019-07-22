var db = require("../models");
var path = require("path");
module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Buddies.findAll({}).then(function () {
      res.sendFile(path.join(__dirname, "../public/html/signup.html"));
    });
  });

  app.get("/display/:me", function (req, res) {
    db.Buddies.findAll({}).then(function (result) {
      res.render("friendsdisplay", {
        buddy: result,
        photoURL: result[req.params.me - 1].photo
      });
    });
  });
  app.get("/signin", function (req, res) {
    console.log(req.body)
    db.Buddies.findAll({
    }).then(function (result) {
      res.sendFile(path.join(__dirname, "../public/html/signin.html"));
    });
  });

  app.get("/profile/:id/:me", function (req, res) {
    db.Buddies.findAll({
      where: {
        id: [req.params.me,req.params.id]
      }
    }).then(function (result) {
    if(req.params.me<req.params.id){
      res.render("personalpage", {
        photo: result[1].photo,
        description: result[1].description,
        past_travel: result[1].past_travel,
        person: result[1].person,
        name: result[1].name,
        age: result[1].age,
        prefered_trip: result[1].prefered_trip,
        intrests: result[1].intrests,
        dest1: result[1].dest1,
        dest2: result[1].dest2,
        dest3: result[1].dest3,
        country: result[1].country,
        diet: result[1].diet,
        gender: result[1].gender,
        language: result[1].language,
        must_see: result[1].must_see,
        photoURL2:result[0].photo
        // photoURL2:result[req.params.me].photo
      });
    }else{
      res.render("personalpage", {
        photo: result[0].photo,
        description: result[0].description,
        past_travel: result[0].past_travel,
        person: result[0].person,
        name: result[0].name,
        age: result[0].age,
        prefered_trip: result[0].prefered_trip,
        intrests: result[0].intrests,
        dest1: result[0].dest1,
        dest2: result[0].dest2,
        dest3: result[0].dest3,
        country: result[0].country,
        diet: result[0].diet,
        gender: result[0].gender,
        language: result[0].language,
        must_see: result[0].must_see,
        photoURL2:result[1].photo
        // photoURL2:result[req.params.me].photo
      });
    }

      
    });
  });


  app.get("/myprofile/:me", function (req, res) {
    db.Buddies.findAll({
      where: {
        id: req.params.me
      }
    }).then(function (result) {
      res.render("myProfile", {   
        id:result[0].id,    
        photo: result[0].photo,
        description: result[0].description,
        past_travel: result[0].past_travel,
        person: result[0].person,
        name: result[0].name,
        age: result[0].age,
        prefered_trip: result[0].prefered_trip,
        intrests: result[0].intrests,
        dest1: result[0].dest1,
        dest2: result[0].dest2,
        dest3: result[0].dest3,
        country: result[0].country,
        diet: result[0].diet,
        gender: result[0].gender,
        language: result[0].language,
        must_see: result[0].must_see, 
        password: result[0].password
      });
      
    });
  });



  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
