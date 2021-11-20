const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()


server.use(jsonServer.rewriter({
  "/api/login-user\\?loginId=:loginId&password=:password": "/login-user?loginId=:loginId&password=:password",
  "/api/user-info-list": "/user-info-list"
}))

server.use(middlewares)

server.use(router)

server.listen(3000, () => {
  console.log('JSON Server is running')
})
