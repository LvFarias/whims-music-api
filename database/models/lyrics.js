'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Lyrics extends Model { }

  Lyrics.init({
    music_id: DataTypes.INTEGER,
    lyric: DataTypes.TEXT,
    begin_time: DataTypes.TIME,
    end_time: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Lyrics',
  });

  Lyrics.associate = (models) => {
    const { Musics } = models;

    Lyrics.belongsTo(
      Musics,
      { foreignKey: 'music_id', onDelete: 'CASCADE' }
    );
  };
  
  return Lyrics;
};