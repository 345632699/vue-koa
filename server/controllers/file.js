class FileController {
  static async saveFile (ctx) {
    ctx.body = {
      data: 1,
      msg: 'success'
    }
  }
}

module.exports = FileController
