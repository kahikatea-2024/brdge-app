// @vitest-environment jsdom
import { describe, expect, it, beforeEach, vi } from 'vitest'
import nock from 'nock'
import { setupApp } from './setup.tsx'
import '@testing-library/jest-dom'

const EXAMPLE_EXPERIENCE = [
  {
    user_background_id: 4,
    user_id: 3,
    background_id: 3,
    duration: '2021 to present',
    position_or_qualification: 'Animal Control Operator',
    isExperience: 1,
    is_education: 1,
    is_experience: 1,
    logo_url: 'placeholder',
    name_of_place: 'Dev Academy',
    location: null,
  },
]
// vi.mock('@auth0/auth0-react', () => ({
//   useAuth0: () => ({
//     user: {
//       sub: 'auth0|6674a9c1a7ae4c2f109f5666',
//       email: 'shrek@exampleswamp.com',
//     },
//     isAuthenticated: true,
//     getAccessTokenSilently: vi.fn(() => 'token'),
//   }),
// }))
describe('Testing Experience', () => {
  beforeEach(() => {
    nock.cleanAll() // Clean up any previous nocks
  })

  it('Is visible on the experience page', async () => {
    const scope = nock('http://localhost')
      .post('/api/v1/profiles', { auth0Id: 'auth0|6674a9c1a7ae4c2f109f5666' })
      .reply(200, EXAMPLE_EXPERIENCE) // Assuming the response is an array

    const screen = setupApp('/shrek')
    // console.log(screen)

    // const loadingIndicator = await screen.findByAltText('Loading...')
    // expect(loadingIndicator).toBeVisible()

    // Await the API call completion and UI update
    const experienceElement = await screen.findByText('Animal Control Operator')
    // console.log(experienceElement)
    expect(experienceElement).toBeVisible()

    // Ensure the nock interceptor was called
    expect(scope.isDone()).toBe(true)
  })
})
