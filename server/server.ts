import * as Path from 'node:path'
import songs from './routes/songs'
import express from 'express'

const server = express()
server.use(express.json())

server.use('/api/v1/songs', songs)
server.use('/api/v1/songs/:id', songs)
// ADD YOUR API ROUTES HERE

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
