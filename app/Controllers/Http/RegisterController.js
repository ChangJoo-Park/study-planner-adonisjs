'use strict'

class RegisterController {
  async index ({ request, view }) {
    return view.render('register-index')
  }

  async doRegister ({ request, response }) {
    console.log("hello!!!")
  }
}

module.exports = RegisterController
