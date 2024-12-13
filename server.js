require('dotenv').config()

const jsonServer = require("json-server")

const server = jsonServer.create() // creamos el servidor

const middlewares = jsonServer.defaults() // configuraciones bases de un servidor

server.use(middlewares)

const allowAccessFromAnywhere = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  next()
} // configuracion para permir acceso de cualquier cliente en el mundo a mi servidor

server.use(allowAccessFromAnywhere)

const routes = jsonServer.router("db.json") // genera todas las rutas de acceso posibles

server.use(routes)

const PORT = process.env.PORT

server.listen(PORT, () => {
  console.log(`JSON server ejecutandose en el puerto ${PORT}`)
  console.log(`Acceso local en http://localhost:${PORT}`)
}) // activar el servidor y ponerlo a escuchar llamadas
