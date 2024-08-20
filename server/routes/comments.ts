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

export default router
