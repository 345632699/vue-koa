/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sc_articles', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'sc_users',
        key: 'id'
      }
    },
    content: {
      type: DataTypes.STRING(0),
      allowNull: true
    },
    type_id: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    is_published: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    attach_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cteated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'sc_articles'
  });
};
