import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(
    <App
      props1={'asd'}
      props2={'asd'}
      props3={'asd'}
      props4={'asd'}
      props5={'asd'}
    />
  )
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
