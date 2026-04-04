/**
 * Tests for AlbumGrid — heading, document title, per-album images,
 * links, title overlays, artwork src, and placeholder fallback.
 *
 * Wrapped in MemoryRouter because AlbumGrid renders React Router <Link> elements.
 */
import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import AlbumGrid from '../components/AlbumGrid'
import {
  mockAlbums,
  mockAlbumWithIframe,
  mockAlbumWithoutArtwork,
} from './fixtures'

const PLACEHOLDER_URL = 'https://via.placeholder.com/320'

const renderAlbumGrid = (
  albums = mockAlbums,
  placeholderUrl = PLACEHOLDER_URL
) =>
  render(
    <MemoryRouter>
      <AlbumGrid albums={albums} placeholderUrl={placeholderUrl} />
    </MemoryRouter>
  )

describe('AlbumGrid', () => {
  beforeEach(() => {
    document.title = ''
  })

  it('renders without crashing', () => {
    renderAlbumGrid()
  })

  it('renders the Computer Music heading', () => {
    renderAlbumGrid()
    expect(
      screen.getByRole('heading', { name: /computer music/i })
    ).toBeInTheDocument()
  })

  it('sets the document title', () => {
    renderAlbumGrid()
    expect(document.title).toBe('Ian M Fraser | Music')
  })

  it('renders an image for every album', () => {
    renderAlbumGrid()
    mockAlbums.forEach((album) => {
      expect(screen.getByAltText(`${album.id} artwork`)).toBeInTheDocument()
    })
  })

  it('renders a link for every album', () => {
    renderAlbumGrid()
    const links = screen.getAllByRole('link')
    expect(links.length).toBe(mockAlbums.length)
  })

  it('renders the title overlay for every album', () => {
    renderAlbumGrid()
    mockAlbums.forEach((album) => {
      expect(screen.getByText(album.title)).toBeInTheDocument()
    })
  })

  it('each album link navigates to its id', () => {
    renderAlbumGrid()
    const links = screen.getAllByRole('link')
    mockAlbums.forEach((album, i) => {
      expect(links[i]).toHaveAttribute('href', `/${album.id}`)
    })
  })

  it('renders the album artwork src when artwork is available', () => {
    renderAlbumGrid()
    const img = screen.getByAltText(`${mockAlbumWithIframe.id} artwork`)
    expect(img).toHaveAttribute('src', mockAlbumWithIframe.artwork)
  })

  it('renders the placeholder image when album has no artwork', () => {
    renderAlbumGrid([mockAlbumWithoutArtwork])
    const img = screen.getByAltText(`${mockAlbumWithoutArtwork.id} artwork`)
    expect(img).toHaveAttribute('src', PLACEHOLDER_URL)
  })
})
