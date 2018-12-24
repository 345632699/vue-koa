const auth = require('../controllers/userController')
const user = require('../controllers/user')
const koaRouter = require('koa-router')
const router = koaRouter()
// 获取文章列表
const article = require('../controllers/articleController')
router.get('/article/list/', article.getArticleList)

router.get('/user/:id', auth.getUserInfo) // 定义url的参数是id
router.post('/user', user.postUserAuth)

module.exports = router
