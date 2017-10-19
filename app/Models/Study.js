'use strict'

const Model = use('Model')

class Study extends Model {

  user () {
    return this.belongsTo('App/Models/User')
  }

}

module.exports = Study
