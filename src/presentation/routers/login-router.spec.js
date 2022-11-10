class LoginRouter {
  route (httpRequest) {
    if (!httpRequest.body.email) {
      return {
        statusCode: 400
      }
    }
  }
}

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
  })
})
