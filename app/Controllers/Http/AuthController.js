'use strict'

class AuthController {
  // Show Page
  async index ({ view, auth }) {
    try {
      await auth.check()
    } catch (error) {
      return view.render('auth-index')
    }
  }

  // Do login
  async login ({ request, auth, response }) {
    const { email, password } = request.all()

    await auth.attempt(email, password)

    return response.route('StudyController.index')
  }
}

module.exports = AuthController
