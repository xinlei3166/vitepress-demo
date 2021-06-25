// vitepress设置base后，sidebar会出现问题，手动补全path
exports.getPath = function (path) {
  return path
  // return path.replace('/', base)
}
