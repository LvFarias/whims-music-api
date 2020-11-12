'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Artists extends Model { }

  Artists.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Artists',
  });

  Artists.associate = (models) => {
    const { Albums, Musics, Users } = models;

    Artists.hasMany(
      Albums,
      { foreignKey: 'artist_id', onDelete: 'CASCADE' }
    );
    Artists.hasMany(
      Musics,
      { foreignKey: 'artist_id', onDelete: 'CASCADE' }
    );
    Artists.belongsToMany(
      Users,
      { through: 'User_Artists_Follow', onDelete: 'CASCADE' }
    );
  };
  
  return Artists;
};