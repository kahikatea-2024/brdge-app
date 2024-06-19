import { Router } from 'express'
import * as db from '../db/postFeed.ts'
const router = Router()

//getAllPosts route - checked in thunderclient, can receive results

router.get('/', async (req, res) => {
  try {
    const posts = await db.getAllPosts()
    res.json(posts)
  } catch (error) {
    console.error(`database error: ${error}`) //will return the error message in thunderclient
    res.sendStatus(500)
  }
})

//addPost route

//editPOst route

//deletePost route

//getPOstbyId route

export default router
