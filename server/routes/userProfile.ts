import { Router } from 'express'
import * as db from '../db/userProfile.ts'
const router = Router()

//getUserProfileByUsername

router.get('/search', async (req, res) => {
  const query = req.query.q as string

  if (!query) {
    res.status(422).json({ message: 'Please provide a valid query' })
  }
  try {
    const userProfile = await db.getUserProfileByUsername(query)
    res.json(userProfile)
  } catch (error) {
    console.error(`database error: ${error}`)
    res.sendStatus(500)
  }
})

export default router

//getUserProfileById
router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const profile = await db.getUserProfileById(id)
    res.json(profile)
  } catch (error) {
    console.error(`database error: ${error}`)
    res.sendStatus(500)
  }
})
