import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import Contact from '../components/Contact'

describe('Contact', () => {
  beforeEach(() => {
    document.title = ''
  })

  it('renders without crashing', () => {
    render(<Contact />)
  })

  it('sets the document title', () => {
    render(<Contact />)
    expect(document.title).toBe('Ian M Fraser | Contact')
  })

  it('renders the artist bio text', () => {
    render(<Contact />)
    expect(screen.getByText(/composer working in the field of computer music/i)).toBeInTheDocument()
  })

  it('renders the email contact link', () => {
    render(<Contact />)
    expect(screen.getByRole('link', { name: /imf@ianmfraser\.computer/i })).toBeInTheDocument()
  })

  it('email link has a mailto href', () => {
    render(<Contact />)
    expect(screen.getByRole('link', { name: /imf@ianmfraser\.computer/i })).toHaveAttribute(
      'href',
      'mailto:imf@ianmfraser.computer'
    )
  })

  it('renders the artist photo', () => {
    render(<Contact />)
    expect(screen.getByAltText(/imf performing at trans pecos/i)).toBeInTheDocument()
  })

  it('renders the photo credit', () => {
    render(<Contact />)
    expect(screen.getByText(/Billy Gomberg/i)).toBeInTheDocument()
  })

  it('mentions generative structures in the bio', () => {
    render(<Contact />)
    expect(screen.getByText(/generative structures/i)).toBeInTheDocument()
  })
})
