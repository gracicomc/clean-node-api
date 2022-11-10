const LoginRouter = require('./login-router')
const MissingParamError = require('../helpers/missing-param-error')

describe('Login Router', () => {
  it('should return 400 if email is not provided', () => {
    const sut = new LoginRouter() // sut: system under test

    const httpRequest = {
      body: {
        password: 'pass1234'
      }
    }
    const httpResponse = sut.route(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })

  it('should return 400 if password is not provided', () => {
    const sut = new LoginRouter()

    const httpRequest = {
      body: {
        email: 'email@email.com'
      }
    }
    const httpResponse = sut.route(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })

  it('should return 500 if httpRequest is not provided', () => {
    const sut = new LoginRouter()

    const httpResponse = sut.route()

    expect(httpResponse.statusCode).toBe(500)
  })

  it('should return 500 if httpRequest has no body', () => {
    const sut = new LoginRouter()

    const httpRequest = {}
    const httpResponse = sut.route(httpRequest)

    expect(httpResponse.statusCode).toBe(500)
  })
})
