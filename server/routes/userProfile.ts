import { Router } from 'express'
import * as db from '../db/userProfile.ts'
const router = Router()

//getUserIdByUsername

router.get('/search', async (req, res) => {
  const query = req.query.q as string

  if (!query) {
    res.status(422).json({ message: 'Please provide a valid query' })
  }
  try {
    const userId = await db.getUserProfileByUsername(query)
    res.json(userId)
  } catch (error) {
    console.error(`database error: ${error}`)
    res.sendStatus(500)
  }
})

export default router

//getUserProfileByAuthId
router.post('/', async (req, res) => {
  try {
    const { id } = req.body.auth0Id
    const profile = await db.getUserProfileByAuth0Id(id)
    res.json(profile)
  } catch (error) {
    console.error(`database error: ${error}`)
    res.sendStatus(500)
  }
})

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

//getUserEducationbyId - thunderclient working
router.get('/:id/education', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const education = await db.getUserEducationbyId(id)
    res.json(education)
  } catch (error) {
    console.error(`database error: ${error}`)
    res.sendStatus(500)
  }
})

//getUserExperiencebyId - thunderclient working
router.get('/:id/experience', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const experience = await db.getUserExperiencebyId(id)
    res.json(experience)
  } catch (error) {
    console.error(`database error: ${error}`)
    res.sendStatus(500)
  }
})
