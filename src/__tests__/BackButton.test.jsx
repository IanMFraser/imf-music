import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import BackButton from '../components/BackButton'

const mockNavigate = vi.fn()

vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  }
})

const renderBackButton = () =>
  render(
    <MemoryRouter>
      <BackButton />
    </MemoryRouter>
  )

describe('BackButton', () => {
  beforeEach(() => {
    mockNavigate.mockClear()
  })

  it('renders without crashing', () => {
    renderBackButton()
  })

  it('renders a button', () => {
    renderBackButton()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('button label includes back text', () => {
    renderBackButton()
    expect(screen.getByRole('button', { name: /back/i })).toBeInTheDocument()
  })

  it('navigates to /music/albums when clicked', () => {
    renderBackButton()
    fireEvent.click(screen.getByRole('button'))
    expect(mockNavigate).toHaveBeenCalledWith('/music/albums')
  })

  it('calls navigate exactly once per click', () => {
    renderBackButton()
    fireEvent.click(screen.getByRole('button'))
    expect(mockNavigate).toHaveBeenCalledTimes(1)
  })

  it('does not navigate before the button is clicked', () => {
    renderBackButton()
    expect(mockNavigate).not.toHaveBeenCalled()
  })
})
