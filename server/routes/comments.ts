import { Router } from 'express'
import * as db from '../db/comments.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const comments = await db.getAllComments()
    res.json({ comments: comments.reverse() })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const comment = await db.getCommentsById(req.params.id)
    res.json(comment)
  } catch (err) {
    next(err)
  }
})
router.get('/posts/:post_id', async (req, res) => {
  try {
    const commentByPostId = await db.getCommentsByPostId(
      Number(req.params.post_id),
    )
    res.json([commentByPostId]) //Update Wrap in an array
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/posts/:post_id/count', async (req, res) => {
  try {
    const postId = Number(req.params.post_id)
    const commentCount = await db.getCommentCountByPostId(postId)
    res.json({ count: commentCount })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
