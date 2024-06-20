import db from './connection.ts'

// getUserProfileByUsername

export async function getUserProfileByUsername(userName: string) {
  const res = db('profiles')
    .join('users', 'profiles.user_id', 'users.user_id')
    .where(
      db.raw('lower(users.username) like ?', [`%${userName.toLowerCase()}%`]),
    )
  return res
}

//getUserProfileById
export async function getUserProfileById(id: number) {
  const res = db('profiles').where('user_id', id).first()
  return res
}

//editUserProfile -AUTH to be included

//getUserBackgroundbyId
export async function getUserBackgroundbyId(id: number) {
  const res = db('user_background')
    .join(
      'background',
      'user_background.background_id',
      'background.background_id',
    )
    .where('user_background.user_id', id)

  return res
}
