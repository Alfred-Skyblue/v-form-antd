const fs = require('fs')
const path = require('path')
const pkg = require('../package.json')
const url = path.join(__dirname, '../lib/')
function cssRename() {
  const oldFile = `${url + pkg.name}-runtime.css`
  const newFile = `${url}index.css`
  fs.rename(oldFile, newFile, err => {
    if (err) throw err
  })
}
cssRename()
