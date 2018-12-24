/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('sc_video', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    type_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    is_published: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    video_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'sc_video',
    underscored: true
  })
}
