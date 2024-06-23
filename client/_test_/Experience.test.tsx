// import { describe, expect, it, beforeEach, vi } from 'vitest'
// import nock from 'nock'
// import { renderRoute } from './setup'
// import '@testing-library/jest-dom'

// const EXAMPLE_EXPERIENCE = {
//   duration: '1820-1942',
//   position_or_qualification: 'Senior something',
//   logo_url: 'images/work.png',
//   name_of_place: 'Biggest company ever',
//   location: 'Mashhad',
// }

// describe('Testing Experience', () => {
//   it('Is visible on the experience page', async () => {
//     const scope = nock('http://localhost')
//       .get('/api/v1/profiles')
//       .reply(200, EXAMPLE_EXPERIENCE)

//     const screen = renderRoute('/1/experience')
//     const loadingIndicator = await screen.findByLabelText('Loading...')
//     expect(loadingIndicator).toBeVisible()
//     expect(scope.isDone()).toBe(true)
//   })
// })

import { describe, expect, it, beforeEach, vi } from 'vitest'
import nock from 'nock'
import { renderRoute } from './setup'
import '@testing-library/jest-dom'

const EXAMPLE_EXPERIENCE = {
  duration: '1820-1942',
  position_or_qualification: 'Senior something',
  logo_url: 'images/work.png',
  name_of_place: 'Biggest company ever',
  location: 'Mashhad',
}

describe('Testing Experience', () => {
  beforeEach(() => {
    nock.cleanAll() // Clean up any previous nocks
  })

  it('Is visible on the experience page', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/profiles')
      .reply(200, [EXAMPLE_EXPERIENCE]) // Assuming the response is an array

    const screen = renderRoute('/1/experience')

    const loadingIndicator = await screen.findByLabelText('Loading...')
    expect(loadingIndicator).toBeVisible()

    // Await the API call completion and UI update
    const experienceElement = await screen.findByText('Senior something')
    expect(experienceElement).toBeVisible()

    // Ensure the nock interceptor was called
    expect(scope.isDone()).toBe(true)
  })
})
