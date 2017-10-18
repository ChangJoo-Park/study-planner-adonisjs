'use strict'

const Schema = use('Schema')

class StudySchema extends Schema {
  up () {
    this.create('studies', (table) => {
      table.increments()
      table.integer('user_id').references('id').inTable('users')
      table.string('name').notNullable()
      table.string('description').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('studies')
  }
}

module.exports = StudySchema
