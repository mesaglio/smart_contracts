const http = require('http')
const express = require('express')

const pingRouter = require('./routes/ping')
const messageRouter = require('./routes/message')

const app = express()
app.use(express.json())

/**
 * ROUTES
 */
app.use('/message', messageRouter)
app.use('/ping', pingRouter)


const server = http.createServer(app)
const port = (process.env.PORT || 5000)
server.listen(port)
console.debug('Server listening on port ' + port)