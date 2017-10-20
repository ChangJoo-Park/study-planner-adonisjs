'use strict'

const Schema = use('Schema')

class IterationSchema extends Schema {
  up () {
    this.create('iterations', (table) => {
      table.increments()
      table.integer('user_id').references('id').inTable('users')
      table.integer('study_id').references('id').inTable('studies')
      table.string('name').notNullable()
      table.date('started_at').notNullable()
      table.date('ended_at').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('iterations')
  }
}

module.exports = IterationSchema
