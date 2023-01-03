const { basename } = require('path')

module.exports = {
  process(sourceText, sourcePath, options) {
    return {
      code: `module.exports = ${JSON.stringify(basename(sourcePath))};`
    }
  }
}
