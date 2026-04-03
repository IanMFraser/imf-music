import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import OldNews from '../components/OldNews'
import data from '../data.json'

const { oldNews } = data.news
const itemsWithLinks = oldNews.filter((n) => n.link)
const itemsWithoutLinks = oldNews.filter((n) => !n.link)

describe('OldNews', () => {
  it('renders without crashing', () => {
    render(<OldNews />)
  })

  it('renders the OLD NEWS heading', () => {
    render(<OldNews />)
    expect(screen.getByRole('heading', { name: /old news/i })).toBeInTheDocument()
  })

  it('renders content for all old news items', () => {
    render(<OldNews />)
    oldNews.forEach((news) => {
      expect(screen.getByText(new RegExp(news.content.substring(0, 20)))).toBeInTheDocument()
    })
  })

  it('renders the date for each item', () => {
    render(<OldNews />)
    // Use getAllByText to handle duplicate dates (e.g. two items share Dec 17, 2018)
    oldNews.forEach((news) => {
      expect(screen.getAllByText(new RegExp(news.date)).length).toBeGreaterThan(0)
    })
  })

  it('renders the category for each item', () => {
    render(<OldNews />)
    // Categories are rendered inside <strong> alongside dates, so match as substring
    expect(screen.getAllByText(/RELEASE/).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/PERFORMANCE/).length).toBeGreaterThan(0)
  })

  it('renders links only for items that have them', () => {
    render(<OldNews />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBe(itemsWithLinks.length)
  })

  it('does not render links for items without one', () => {
    render(<OldNews />)
    if (itemsWithoutLinks.length > 0) {
      const links = screen.getAllByRole('link')
      expect(links.length).toBe(itemsWithLinks.length)
    }
  })

  it('external links open in a new tab', () => {
    render(<OldNews />)
    const links = screen.getAllByRole('link')
    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank')
    })
  })
})
