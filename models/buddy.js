module.exports = function (sequelize, DataTypes) {
  var Buddies = sequelize.define("Buddies", {
    photo: {
      type: DataTypes.TEXT,
      defaultValue: "upload photo"
    },

    name: {
      type: DataTypes.TEXT,
      defaultValue: "your name"
    },
    password: {
      type: DataTypes.TEXT,
      defaultValue: "your pw"
    },
    age: {
      type: DataTypes.INTEGER,
      defaultValue: 25
    },
    email: {
      type: DataTypes.TEXT,
      defaultValue: "your email"
    },
    country: {
      type: DataTypes.TEXT,
      defaultValue: "Country"
    },
    language: {
      type: DataTypes.TEXT,
      defaultValue: "ENG"
    },
    gender: {
      type: DataTypes.TEXT,
      defaultValue: "your gender"
    },
    diet: {
      type: DataTypes.TEXT,
      defaultValue: "your diet"
    },
    description: {
      type: DataTypes.TEXT,
      defaultValue: "your desc"
    },
    past_travel: {
      type: DataTypes.TEXT,
      defaultValue: "past travel"
    },
    intrests: {
      type: DataTypes.TEXT,
      defaultValue: "interests"
    },
    person: {
      type: DataTypes.TEXT,
      defaultValue: "person"
    },
    dest1: {
      type: DataTypes.TEXT,
      defaultValue: "dest1"
    },
    dest2: {
      type: DataTypes.TEXT,
      defaultValue: "dest2"
    },
    dest3: {
      type: DataTypes.TEXT,
      defaultValue: "dest3"
    },
    must_see: {
      type: DataTypes.TEXT,
      defaultValue: "mustsee"
    },
    prefered_trip: {
      type: DataTypes.TEXT,
      defaultValue: "preftrip"
    }
  });
  return Buddies;
};
