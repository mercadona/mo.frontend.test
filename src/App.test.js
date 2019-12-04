import React from 'react'
import { render } from '@testing-library/react'
import { shallow } from 'enzyme'

import App from './App'

it('should show "Hi" with Testing library', async () => {
  const { getByText } = render(<App />)

  const text = getByText('Hi')

  expect(text).toBeInTheDocument()
})

it('should show "Hi" with Enzyme library', async () => {
  const app = shallow(<App />)

  const text = app.find('[role="heading"]')

  expect(text.text()).toBe('Hi')
})
