import React from 'react'
import { render } from '@testing-library/react'
import { shallow, mount } from 'enzyme'

import App from './App'

it('should show "Hi"', async () => {
  const { getByText } = render(<App />)

  const text = getByText('Hi')

  expect(text).toBeInTheDocument()
})
