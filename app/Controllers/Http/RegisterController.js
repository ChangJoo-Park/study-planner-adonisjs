'use strict'

class RegisterController {
  async index ({ request, view }) {
    return view.render('register-index')
  }

  async doRegister ({ request, response, view }) {
    const { username, email, password } = request.only(['username', 'email', 'password'])
    return view.render('auth-index')
  }
}

module.exports = RegisterController
