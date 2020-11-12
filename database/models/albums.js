'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Albums extends Model { }
  
  Albums.init({
    artist_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    cover: DataTypes.STRING,
    year: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Albums',
  });

  Albums.associate = (models) => {
    const { Artists, Musics, Users } = models;

    Albums.belongsTo(
      Artists,
      { foreignKey: 'artist_id', onDelete: 'CASCADE' }
    );
    Albums.hasMany(
      Musics,
      { foreignKey: 'album_id', onDelete: 'CASCADE' }
    );
    Albums.belongsToMany(
      Users,
      { through: 'User_Albums_Like', onDelete: 'CASCADE' }
    );
  };
  
  return Albums;
};