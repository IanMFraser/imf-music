import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../components/Home'

describe('Home', () => {
  beforeEach(() => {
    document.title = ''
  })

  it('renders without crashing', () => {
    render(<Home />)
  })

  it('sets the document title', () => {
    render(<Home />)
    expect(document.title).toBe('Ian M Fraser | Computer Music')
  })

  it('renders the News section heading', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: /^news$/i })).toBeInTheDocument()
  })

  it('renders the Old News section heading', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: /old news/i })).toBeInTheDocument()
  })
})
