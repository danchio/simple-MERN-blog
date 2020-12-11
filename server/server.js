const express = require('express')
const server = express()
const articleRouter = require("./Article/router");
const mongoose = require('mongoose')

const PORT = process.env.port || 8000
server.listen(PORT, () => console.log(`Express server listening on port ${PORT}`))

mongoose.connect(`mongodb+srv://danchio:passwordpassword@cluster0.y70oo.mongodb.net/mernblog?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const connection = mongoose.connection
connection.once('open', () => console.log("MongoDB connection established."))


server.use(express.json())
server.use(express.urlencoded({ extended: false }))
server.use('/articles', articleRouter)