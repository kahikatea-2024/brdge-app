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
}

//editUserProfile -AUTH to be included
export async function editUserProfile(updatedProfile) {}
