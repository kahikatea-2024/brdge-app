import { Router } from 'express'
import * as db from '../db/postFeed.ts'
import * as connections from '../db/userProfile.ts'
import moment from 'moment'
import checkJwt, { JwtRequest } from '../auth0.ts'

const router = Router()

//getAllPosts route - checked in thunderclient, can receive results

router.get('/', async (_req, res) => {
  try {
    const posts = await db.getAllPosts()
    res.json(posts.reverse())
  } catch (error) {
    console.error(`database error: ${error}`)
    res.sendStatus(500)
  }
})

//addPost route - auth to be added - confirmed pre-auth working in thunderclient
router.post('/', checkJwt, async (req: JwtRequest, res) => {
  try {
    const newPost = req.body
    const auth0Id = req.auth?.sub
    newPost.poster_auth0Id = auth0Id

    if (auth0Id) {
      const user = await connections.getUserProfileByAuth0Id(auth0Id)
      newPost.user_id = user.user_id
      newPost.username = user.username
      newPost.avatar_image = user.avatar_image

      await db.addPost(newPost)
      res.sendStatus(201)
    }
  } catch (error) {
    console.error(`database error: ${error}`)
    res.sendStatus(500)
  }
})

//editPost route - auth to be added - pre-auth works in thunderclient

router.patch('/:id', checkJwt, async (req: JwtRequest, res) => {
  try {
    const feed_post_id = Number(req.params.id)
    const { user_id, content, image_url, username, avatar_image } = req.body
    const auth0Id = req.auth?.sub
    const timestamp = moment.utc().format('YYYY-MM-DD HH:mm:ss')

    if (auth0Id) {
      const updatedPost = await db.editPost({
        feed_post_id,
        user_id,
        content,
        timestamp,
        image_url,
        username,
        avatar_image,
        poster_auth0Id: auth0Id,
      })
      res.status(200).json({ updated: updatedPost })
    }
  } catch (error) {
    console.error(`database error: ${error}`)
    res.sendStatus(500)
  }
})

//deletePost route -auth to be added - working in thunderclient
router.delete('/:id', checkJwt, async (req: JwtRequest, res) => {
  try {
    const id = Number(req.params.id)
    const auth0Id = req.auth?.sub
    if (auth0Id) await db.deletePost(id, auth0Id)
    res.status(201).json('deleted')
  } catch (error) {
    console.error(`database error: ${error}`)
    res.sendStatus(500)
  }
})

//getPostbyId route - checked in thunderclient, can retrieve single post
router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const post = await db.getPostById(id)
    res.json(post)
  } catch (error) {
    console.error(`database error: ${error}`)
    res.sendStatus(500)
  }
})

export default router
