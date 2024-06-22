import { beforeAll, beforeEach, describe, expect, it } from 'vitest'
import db from '../connection.ts'
import { getUserProfileByUsername } from '../userProfile'

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
