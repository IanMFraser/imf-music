/**
 * Tests for Footer — copyright text and dynamic current year.
 */
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from '../components/Footer'

describe('Footer', () => {
  it('renders without crashing', () => {
    render(<Footer />)
  })

  it('renders copyright text with the artist name', () => {
    render(<Footer />)
    expect(screen.getByText(/copyright/i)).toBeInTheDocument()
    expect(screen.getByText(/ian m fraser/i)).toBeInTheDocument()
  })

  it('renders the current year', () => {
    render(<Footer />)
    const currentYear = new Date().getFullYear().toString()
    expect(screen.getByText(currentYear)).toBeInTheDocument()
  })
})
