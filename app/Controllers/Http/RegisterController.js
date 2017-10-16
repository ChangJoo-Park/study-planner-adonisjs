'use strict'
const User = use('App/Models/User')

class RegisterController {
  async index ({ request, view }) {
    return view.render('register-index')
  }

  async doRegister ({ request, response, view }) {
    const userData = request.only(['username', 'email', 'password'])
    try {
      const newUser = await User.create(userData)
      return response.route('AuthController.index')
    } catch (e) {
      return response.route('RegisterController.index')
    }

  }
}

module.exports = RegisterController
