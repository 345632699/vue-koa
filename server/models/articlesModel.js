const db = require('../config/db')
const ArticleModel = '../schema/sc_articles.js'
const UserModel = '../schema/sc_users.js'
const TypeModel = '../schema/sc_types.js'
const articles = db.sequelize.import(ArticleModel)
const users = db.sequelize.import(UserModel)
const types = db.sequelize.import(TypeModel)

const getarticleList = async function () {
  try {
    let articelList = await articles.findAll({
      include: [{
        model: users,
        as: 'user',
        attributes: ['id', 'name']
      }, {
        model: types,
        as: 'article_type',
        attributes: ['id', 'name']
      }]
    })
    return articelList
  } catch (e) {
    console.log(e)
  }
}
users.hasMany(articles, {foreignKey: 'user_id', targetKey: 'id', as: 'articles'})
articles.belongsTo(users, {foreignKey: 'user_id', targetKey: 'id', as: 'user'})
articles.belongsTo(types, {foreignKey: 'type_id', targetKey: 'id', as: 'article_type'})

module.exports = {
  getarticleList: getarticleList
}
