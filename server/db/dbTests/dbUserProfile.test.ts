import { beforeAll, beforeEach, describe, expect, it } from 'vitest'
import db from '../connection.ts'
import {
  getUserEducationbyId,
  getUserExperiencebyId,
  getUserProfileById,
  getUserProfileByUsername,
} from '../userProfile.ts'

beforeAll(async () => {
  await db.migrate.latest()
})

beforeEach(async () => {
  await db.seed.run()
})

describe('search by username', () => {
  it('can search by start of username', async () => {
    //ARRANGE
    const query = 'Shr'
    //ACT
    const result = await getUserProfileByUsername(query)
    //ASSERT
    expect(result).toHaveLength(1)
    expect(result[0].username).toBe('Shrek')
  })
  it('can search by contained phrase', async () => {
    //given
    const query = 'on'
    //when
    const res = await getUserProfileByUsername(query)
    //then
    expect(res).toHaveLength(2)
    expect(res[0].username).toBe('Fiona')
    expect(res[1].username).toBe('Donkey')
  })
  it('search by exact match', async () => {
    const query = 'Donkey'

    const res = await getUserProfileByUsername(query)

    expect(res).toHaveLength(1)
    expect(res[0].username).toBe('Donkey')
  })
  it('is case insensitive', async () => {
    const query1 = 'Fiona'
    const query2 = 'fiona'

    const res1 = await getUserProfileByUsername(query1)
    const res2 = await getUserProfileByUsername(query2)
    expect(res1[0].username === res2[0].username).toBe(true)
  })

  ///REFACTOR after conditonal error messages added to search
  it('has no match', async () => {
    const query = '12345'

    const res = await getUserProfileByUsername(query)

    expect(res).toHaveLength(0)
  })
})

describe('getUserProfileById', () => {
  it('returns a single profile', async () => {
    const id = 1
    const profile = await getUserProfileById(id)

    expect(profile).toHaveProperty('user_id')
    expect(profile).toHaveProperty('bio')
    expect(profile).toHaveProperty('avatar_image')
    expect(profile).toHaveProperty('cover_image')
    expect(profile).toHaveProperty('location')
    expect(profile).toHaveProperty('website')
  })
  it('returns the correct profile', async () => {
    const id = 2
    const profile = await getUserProfileById(id)
    expect(profile.cover_image).toBe(
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAs_TDUTeHiZQ1tqLJlvItaBOjcmRTeoSbHw&s',
    )
    expect(profile.avatar_image).toBe(
      'https://upload.wikimedia.org/wikipedia/en/b/b9/Princess_Fiona.png',
    )
  })
})

describe('getUserEducationbyId', () => {
  it('returns education and not experience', async () => {
    const id = 1

    const education = await getUserEducationbyId(id)

    expect(education[0].isExperience).toBe(0)
    expect(education[0].position_or_qualification).toBe(
      'Bachelor of Food Science',
    )
  })
})

describe('getUserExperiencebyId', () => {
  it('returns experience', async () => {
    const id = 3

    const experience = await getUserExperiencebyId(id)

    expect(experience[0].isExperience).toBe(1)
    expect(experience[0].position_or_qualification).toBe(
      'Animal Control Operator',
    )
    expect(experience[1].isExperience).toBe(1)
    expect(experience[1].position_or_qualification).toBe(
      'Career Skills Facilitator',
    )
  })
})
