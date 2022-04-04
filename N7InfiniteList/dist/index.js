
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./n7-react-infinitelist.cjs.production.min.js')
} else {
  module.exports = require('./n7-react-infinitelist.cjs.development.js')
}
