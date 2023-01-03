const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

server.on('error', (error) => console.log(`Error en el servidor ${error}`))

app.get('/', (req, res) => {
  res.send({ mensaje: 'Hola mundo' })
})

app.get('/gusti', (req, res) => {
  res.send({ name: 'Gustavo' })
})

// const http = require('http')

// const server = http.createServer((peticion, respuesta) => {
//   let now = new Date()
//   respuesta.end(`${now}`)
//   // respuesta.end('Hola mundo')
//   // respuesta.end(JSON.stringify({ name: 'guille', age: '22' }))
// })

// const connectedServer = server.listen(8080, () => {
//   console.log(
//     `FUNCIONANDO PERPETUA Y escuchando en el puerto ${
//       connectedServer.address().port
//     }`,
//   )
// })
