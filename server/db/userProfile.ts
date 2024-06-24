import db from './connection.ts'

// getUserProfileByUsername

export async function getUserProfileByUsername(userName: string) {
  const res = db('profiles')
    .join('users', 'profiles.user_id', 'users.user_id')
    .where(db.raw('lower(users.username) like ?', [`%${userName}%`]))
    .first()

  return res
}

// getUserProfileById
export async function getUserProfileById(id: number) {
  const res = db('profiles').where('user_id', id).first()
  return res
}

//getUserProfileById
export async function getUserProfileByAuth0Id(id: string) {
  console.log('getUserProfileByAuth0Id: ', id)
  const res = db('users')
    .join('profiles', 'users.user_id', 'profiles.user_id')
    .where('users.auth0Id', id)
    .first()
  return res
}

//getUserEducationbyId
export async function getUserEducationbyId(id: number) {
  const res = db('user_background')
    .join(
      'background',
      'user_background.background_id',
      'background.background_id',
    )
    .where('user_background.user_id', id)
    .andWhere('user_background.isExperience', false)

  return res
}

//getUserExperiencebyId
export async function getUserExperiencebyId(id: number) {
  const res = db('user_background')
    .join(
      'background',
      'user_background.background_id',
      'background.background_id',
    )
    .where('user_background.user_id', id)
    .andWhere('user_background.isExperience', true)

  return res
}
