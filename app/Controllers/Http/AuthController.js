'use strict'

class AuthController {
  // Show Page
  async index ({ view, auth }) {
    try {
      await auth.check()
    } catch (error) {
      console.log(error)
      return view.render('auth-index')
    }
  }

  // Do login
  async login ({ request, auth, response }) {
    const { email, password } = request.all()
    console.log(email, password)

    await auth.attempt(email, password)

    return response.route('StudyController.index')
  }
}

module.exports = AuthController
