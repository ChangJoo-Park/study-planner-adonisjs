'use strict'

const Study = use('App/Models/Study')

class StudyController {
  async index ({ request, response, view, auth }) {
    const studies = await auth.user.studies().fetch()
    return view.render('studies/index', { studies: studies.rows })
  }

  async create ({ view }) {
    return view.render('studies/create')
  }

  async store () {
  }

  async show () {
  }

  async edit () {
  }

  async update () {
  }

  async delete () {
  }
}

module.exports = StudyController
