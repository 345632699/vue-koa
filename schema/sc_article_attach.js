/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sc_article_attach', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    article_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'sc_articles',
        key: 'id'
      }
    },
    attach_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sort: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    crated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'sc_article_attach'
  });
};
