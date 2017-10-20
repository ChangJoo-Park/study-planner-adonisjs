'use strict'

const Model = use('Model')

class Iteration extends Model {
  user () {
    return this.belongsTo('App/Models/User')
  }

  study () {
    return this.belongsTo('App/Models/Study')
  }
}

module.exports = Iteration
