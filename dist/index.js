
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./multiselect-react-dropdown.cjs.production.min.js')
} else {
  module.exports = require('./multiselect-react-dropdown.cjs.development.js')
}
