'use strict'

class AuthController {
  // Show Page
  async index ({ view }) {
    return view.render('auth-index')
  }

  // Do login
  async login () {

  }
}

module.exports = AuthController
