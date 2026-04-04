/**
 * Tests for App — the root component and top-level routing.
 *
 * Uses BrowserRouter (via App itself) with window.history.pushState
 * to simulate navigation to different routes before rendering.
 */
import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  beforeEach(() => {
    window.history.pushState({}, '', '/')
    document.title = ''
  })

  it('renders without crashing', () => {
    render(<App />)
  })

  it('renders the NavBar brand', () => {
    render(<App />)
    expect(screen.getByText('IAN M FRASER')).toBeInTheDocument()
  })

  it('renders the Footer copyright', () => {
    render(<App />)
    expect(screen.getByText(/copyright/i)).toBeInTheDocument()
  })

  it('redirects root path to /music and renders the Home page', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /^news$/i })).toBeInTheDocument()
  })

  it('renders the Music album grid at /music/albums', () => {
    window.history.pushState({}, '', '/music/albums')
    render(<App />)
    expect(
      screen.getByRole('heading', { name: /computer music/i })
    ).toBeInTheDocument()
  })

  it('renders the Contact page at /music/contact', () => {
    window.history.pushState({}, '', '/music/contact')
    render(<App />)
    expect(
      screen.getByText(/composer working in the field of computer music/i)
    ).toBeInTheDocument()
  })
})
