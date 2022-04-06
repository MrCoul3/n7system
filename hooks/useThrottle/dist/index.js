
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./n7-usethrottle.cjs.production.min.js')
} else {
  module.exports = require('./n7-usethrottle.cjs.development.js')
}
