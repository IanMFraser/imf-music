/**
 * Tests for News — current news item rendering: title, date, category,
 * content, image, and the optional external link.
 */
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import News from '../components/News'
import data from '../data/news.json'

const currentNews = data.currentNews

describe('News', () => {
  it('renders without crashing', () => {
    render(<News />)
  })

  it('renders the news title', () => {
    render(<News />)
    expect(screen.getByText(currentNews.title)).toBeInTheDocument()
  })

  it('renders the news date', () => {
    render(<News />)
    expect(screen.getByText(new RegExp(currentNews.date))).toBeInTheDocument()
  })

  it('renders the news category', () => {
    render(<News />)
    expect(screen.getByText(currentNews.category)).toBeInTheDocument()
  })

  it('renders the news content', () => {
    render(<News />)
    // Use a substring with no regex special characters
    expect(
      screen.getByText(/in collaboration with RM Francis/)
    ).toBeInTheDocument()
  })

  it('renders a link when one is provided', () => {
    render(<News />)
    if (currentNews.link) {
      expect(screen.getByRole('link', { name: />>/ })).toBeInTheDocument()
    }
  })

  it('link points to the correct URL', () => {
    render(<News />)
    if (currentNews.link) {
      expect(screen.getByRole('link', { name: />>/ })).toHaveAttribute(
        'href',
        currentNews.link
      )
    }
  })

  it('link opens in a new tab', () => {
    render(<News />)
    if (currentNews.link) {
      expect(screen.getByRole('link', { name: />>/ })).toHaveAttribute(
        'target',
        '_blank'
      )
    }
  })

  it('renders the news image', () => {
    render(<News />)
    expect(screen.getByRole('img')).toHaveAttribute('src', currentNews.images)
  })
})
