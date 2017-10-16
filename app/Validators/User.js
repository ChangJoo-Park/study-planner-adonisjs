'use strict'

class User {
  get rules () {
    return {
      email: 'required|email|unique:users,email',
      password: 'required|min:6'
    }
  }
}

module.exports = User
