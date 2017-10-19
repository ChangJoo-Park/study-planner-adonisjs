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

  async store ({ request, response, view, auth }) {
    const { name, description } = await request.only(['name', 'description'])
    const newStudy = await new Study()
    newStudy.name = name
    newStudy.description = description

    try {
      const saved = await auth.user.studies().save(newStudy)
      return response.route('StudyController.index')
    } catch (e) {
      console.log('ERROR')
      console.log(e)
    }
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
