const articleModel = require('../models/articlesModel')

class ArticleController {
  static async getArticleList (ctx) {
    let articlelist = await articleModel.getarticleList()
    ctx.body = {
      success: false, // success标志位是方便前端判断返回是正确与否
      info: '',
      data: articlelist
    }
  }
}

module.exports = ArticleController
