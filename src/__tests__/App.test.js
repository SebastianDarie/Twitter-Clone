import { render, screen } from '@testing-library/react'
import App from '../App'

it('renders title', () => {
  render(<App />)
  expect(screen.getByText(/join twitter today/i)).toBeInTheDocument()
})
