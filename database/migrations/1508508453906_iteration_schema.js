'use strict'

const Schema = use('Schema')

class IterationSchema extends Schema {
  up () {
    this.create('iterations', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('iterations')
  }
}

module.exports = IterationSchema
