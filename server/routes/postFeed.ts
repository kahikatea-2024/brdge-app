import { Router } from 'express'
import * as db from '../db/postFeed.ts'
import moment from 'moment'
import checkJwt, { JwtRequest } from '../auth0.ts'
import { newPostData } from '../../models/postFeed.ts'
const router = Router()

//getAllPosts route - checked in thunderclient, can receive results

router.get('/', async (req, res) => {
  try {
    const posts = await db.getAllPosts()
    res.json(posts)
  } catch (error) {
    console.error(`database error: ${error}`)
    res.sendStatus(500)
  }
})

//addPost route - auth to be added - confirmed pre-auth working in thunderclient
router.post('/', checkJwt, async (req: JwtRequest, res) => {
  const { newPost } = req.body as { newPost: newPostData }
  const auth0Id = req.auth?.sub

  if (!newPost) {
    console.error('No information provided')
    return res.status(400).send('Bad request')
  }

  if (!auth0Id) {
    console.error('No auth0Id')
    return res.status(401).send('Unauthorized')
  }

  try {
    const newPost = req.body
    await db.addPost(newPost)
    res.sendStatus(201)
  } catch (error) {
    console.error(`database error: ${error}`)
    res.sendStatus(500)
  }
})

//editPost route - auth to be added - pre-auth works in thunderclient

router.patch('/:id', async (req, res) => {
  try {
    const feed_post_id = Number(req.params.id)
    const { user_id, content, image_url } = req.body
    const timestamp = moment.utc().format('YYYY-MM-DD HH:mm:ss')
    const updatedPost = await db.editPost({
      feed_post_id,
      user_id,
      content,
      timestamp,
      image_url,
    })
    res.status(200).json({ updated: updatedPost })
  } catch (error) {
    console.error(`database error: ${error}`)
    res.sendStatus(500)
  }
})

//deletePost route -auth to be added - working in thunderclient
router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.deletePost(id)
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
