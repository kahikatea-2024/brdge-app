import express from 'express'
import * as Path from 'node:path'

import fruitRoutes from './routes/fruits.ts'
import postFeedRoutes from './routes/postFeed.ts'
import userProfileRoutes from './routes/userProfile.ts'
import commentsRoutes from './routes/comments.ts'

const server = express()

server.use(express.json())

server.use('/api/v1/fruits', fruitRoutes)
server.use('/api/v1/postFeed', postFeedRoutes)
server.use('/api/v1/profiles', userProfileRoutes)
server.use('/api/v1/comments', commentsRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
