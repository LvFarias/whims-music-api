'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model { }

  Users.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    avatar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });

  Users.associate = (models) => {
    const { Albums, Artists, Musics } = models;

    Users.belongsToMany(
      Artists,
      { through: 'User_Artists_Follow', onDelete: 'CASCADE' }
    );
    Users.belongsToMany(
      Albums,
      { through: 'User_Albums_Like', onDelete: 'CASCADE' }
    );
    Users.belongsToMany(
      Musics,
      { as: 'MusicsLiked', through: 'User_Musics_Like', onDelete: 'CASCADE' }
    );
    Users.belongsToMany(
      Musics,
      { as: 'MusicsViewed', through: 'User_Musics_View', onDelete: 'CASCADE' }
    );
  };

  return Users;
};