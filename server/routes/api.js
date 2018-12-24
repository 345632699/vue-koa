const api = require('../controllers/listController')
const file = require('../controllers/file')
const koaRouter = require('koa-router')
const router = koaRouter()

router.get('/todolist/:id', api.getTodolist)
router.post('/todolist', api.createTodolist)
router.post('/upload', file.saveFile)
router.delete('/todolist/:userId/:id', api.removeTodolist)
router.put('/todolist/:userId/:id/:status', api.updateTodolist)


module.exports = router
