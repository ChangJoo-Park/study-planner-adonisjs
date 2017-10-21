'use strict'

const Iteration = use('App/Models/Iteration')

class IterationController {
  async store ({ request, response, params, auth }) {
    const studyId = params['study_id']
    const { name, started_at, ended_at } = request.only(['name', 'started_at', 'ended_at'])
    const iteration = new Iteration()
    iteration.user_id = auth.user.id
    iteration.study_id = studyId
    iteration.name = name
    iteration.started_at = started_at
    iteration.ended_at = ended_at

    try  {
      const saved = await iteration.save()
      if (saved) {
        // TODO: Render with iteration
      }
    } catch (e) {
      console.log(e)
    }

  }

  async update () {

  }

  async delete () {

  }
}

module.exports = IterationController
