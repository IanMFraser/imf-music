/**
 * Tests for NavBar — brand name, nav links, and mobile hamburger toggle.
 *
 * Wrapped in MemoryRouter because NavBar renders inside a router context in production.
 */
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import NavBar from '../components/NavBar'

const renderNavBar = () =>
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  )

describe('NavBar', () => {
  it('renders the brand name', () => {
    renderNavBar()
    expect(screen.getByText('IAN M FRASER')).toBeInTheDocument()
  })

  it('brand name links to /music', () => {
    renderNavBar()
    expect(screen.getByText('IAN M FRASER')).toHaveAttribute('href', '/music')
  })

  it('renders the MUSIC nav link', () => {
    renderNavBar()
    expect(screen.getByText('MUSIC')).toBeInTheDocument()
  })

  it('MUSIC link points to /music/albums', () => {
    renderNavBar()
    expect(screen.getByText('MUSIC')).toHaveAttribute('href', '/music/albums')
  })

  it('renders the CONTACT nav link', () => {
    renderNavBar()
    expect(screen.getByText('CONTACT')).toBeInTheDocument()
  })

  it('CONTACT link points to /music/contact', () => {
    renderNavBar()
    expect(screen.getByText('CONTACT')).toHaveAttribute(
      'href',
      '/music/contact'
    )
  })

  it('renders a hamburger toggle for mobile', () => {
    renderNavBar()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
