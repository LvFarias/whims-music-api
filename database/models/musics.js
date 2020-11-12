'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Musics extends Model { }

  Musics.init({
    name: DataTypes.STRING,
    album_id: DataTypes.INTEGER,
    artist_id: DataTypes.INTEGER,
    track_number: DataTypes.INTEGER,
    duration: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Musics',
  });

  Musics.associate = (models) => {
    const { Albums, Artists, Lyrics, Users } = models;

    Musics.belongsTo(
      Albums,
      { foreignKey: 'album_id', onDelete: 'CASCADE' }
    );
    Musics.belongsTo(
      Artists,
      { foreignKey: 'artist_id', onDelete: 'CASCADE' }
    );
    Musics.hasMany(
      Lyrics,
      { foreignKey: 'music_id', onDelete: 'CASCADE' }
    );
    Musics.belongsToMany(
      Users,
      { as: 'Likes', through: 'User_Musics_Like', onDelete: 'CASCADE' }
    );
    Musics.belongsToMany(
      Users,
      { as: 'Views', through: 'User_Musics_View', onDelete: 'CASCADE' }
    );
  };

  return Musics;
};