import { render, screen } from '@testing-library/react'
import Link from './Link'

test('renders link element', () => {
  const [description, url] = ['description', 'url']
  render(<Link link={{ description, url }} />)
  expect(screen.getByText(description)).toBeInTheDocument()
  expect(screen.getByText(url)).toBeInTheDocument()
})
