const userModal = require('../models/userModel')
const bcrypt = require('bcryptjs')
const JWT = require('jsonwebtoken')

class UserController {
  static async postUserAuth (ctx) {
    const data = ctx.request.body // post过来的数据存在request.body里
    const userInfo = await userModal.getUserByName(data.name)
    if (userInfo != null) { // 如果查无此用户会返回null
      if (!bcrypt.compareSync(data.password, userInfo.password)) {
        ctx.body = {
          success: false, // success标志位是方便前端判断返回是正确与否
          info: '密码错误！'
        }
      } else {
        const userToken = {
          name: userInfo.username,
          id: userInfo.id
        }
        const secret = 'vue-koa-demo' // 指定密钥
        const token = JWT.sign(userToken, secret, {expiresIn: 60 * 60 * 2}) // 签发token
        ctx.body = {
          success: true,
          token: token // 返回token
        }
      }
    } else {
      ctx.body = {
        success: false,
        info: '用户不存在！' // 如果用户不存在返回用户不存在
      }
    }
  }
}
module.exports = UserController
