const db = require('../config/db')
const userSchema = '../schema/user' // 引入user的表结构
const TodolistDb = db.sequelize // 引入数据库
const User = TodolistDb.import(userSchema) // 将Sequelize与表结构对应

const getUserById = async function (id) { // 注意是async function 而不是function。对于需要等待promise结果的函数都需要async await。
  const userInfo = await User.findOne({ // 用await控制异步操作，将返回的Promise对象里的数据返回出来。也就实现了“同步”的写法获取异步IO操作的数据
    where: {
      id: id
    }
  })

  return userInfo // 返回数据
}

const getUserByName = async function (name) {
  const userInfo = await User.findOne({
    where: {
      username: name
    }
  })

  return userInfo
}

module.exports = {
  getUserById: getUserById,
  getUserByName: getUserByName
}
