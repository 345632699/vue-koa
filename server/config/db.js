const env = require('../../.env')
const Sequelize = require('sequelize')

const mysql = new Sequelize(`mysql://root:root@${env.DB_URL || 'localhost'}/koa`, {
  define: {
    timestamps: false // 取消Sequelzie自动给数据表加入时间戳（createdAt以及updatedAt）
  }
})
const sequelize = new Sequelize('koa', 'root', 'root', {
  host: '127.0.0.1',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 30000
  },
  timezone: '+08:00',
  liases: false

})
module.exports = {
  mysql: mysql, // 将Todolist暴露出接口方便Model调用
  sequelize: sequelize
}
