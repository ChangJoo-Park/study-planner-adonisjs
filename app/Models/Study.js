'use strict'

const Model = use('Model')

class Study extends Model {

  user () {
    return this.belongsTo('App/Models/User')
  }

  iterations () {
    return this.hasMany('App/Models/Iteration')
  }
}

module.exports = Study
