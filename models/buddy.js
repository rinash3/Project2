module.exports = function (sequelize, DataTypes) {
  var Buddies = sequelize.define("Buddies", {
    photo: DataTypes.STRING,

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter your name"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter your password"
        }
      }
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter your age"
        }
      }
    },
    email: DataTypes.STRING,
    country: DataTypes.STRING,
    language: DataTypes.STRING,
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter your gender"
        }
      }
    },
    diet: DataTypes.STRING,
    description: DataTypes.TEXT,
    past_travel: DataTypes.TEXT,
    intrests: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please select one"
        }
      }
    },
    person: DataTypes.TEXT,
    dest1: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please select one"
        }
      }
    },
    dest2: DataTypes.STRING,
    dest3: DataTypes.STRING,
    must_see: DataTypes.TEXT,
    prefered_trip: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please select one"
        }
      }
    }
  });
  return Buddies;
};