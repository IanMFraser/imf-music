import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import Album from '../components/Album'
import { mockAlbums, mockAlbumWithIframe, mockAlbumWithoutIframe } from './fixtures'

const renderAlbum = (albumId = mockAlbumWithIframe.id) =>
  render(
    <MemoryRouter initialEntries={[`/music/albums/${albumId}`]}>
      <Routes>
        <Route path="/music/albums/:albumId" element={<Album albums={mockAlbums} />} />
      </Routes>
    </MemoryRouter>
  )

describe('Album', () => {
  beforeEach(() => {
    document.title = ''
  })

  it('renders without crashing', () => {
    renderAlbum()
  })

  it('renders the artist and title as a heading', () => {
    renderAlbum()
    expect(
      screen.getByRole('heading', {
        name: `${mockAlbumWithIframe.artist} - ${mockAlbumWithIframe.title}`,
      })
    ).toBeInTheDocument()
  })

  it('sets the document title', () => {
    renderAlbum()
    expect(document.title).toBe(
      `${mockAlbumWithIframe.artist} - ${mockAlbumWithIframe.title} | Ian M Fraser`
    )
  })

  it('shows a loading spinner while the iframe loads', () => {
    renderAlbum()
    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  it('renders the iframe hidden before it loads', () => {
    renderAlbum()
    const iframe = screen.getByTitle(mockAlbumWithIframe.id)
    expect(iframe).toHaveStyle({ display: 'none' })
  })

  it('hides the spinner and shows the iframe after load', () => {
    renderAlbum()
    const iframe = screen.getByTitle(mockAlbumWithIframe.id)
    fireEvent.load(iframe)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    expect(iframe).toHaveStyle({ display: 'block' })
  })

  it('iframe has the correct src', () => {
    renderAlbum()
    expect(screen.getByTitle(mockAlbumWithIframe.id)).toHaveAttribute(
      'src',
      mockAlbumWithIframe.iframeSrc
    )
  })

  it('iframe has the media permissions allow attribute', () => {
    renderAlbum()
    expect(screen.getByTitle(mockAlbumWithIframe.id)).toHaveAttribute(
      'allow',
      'autoplay; encrypted-media; fullscreen'
    )
  })

  it('renders artwork image instead of iframe when iframeSrc is absent', () => {
    renderAlbum(mockAlbumWithoutIframe.id)
    expect(screen.getByAltText(`${mockAlbumWithoutIframe.title} artwork`)).toBeInTheDocument()
  })

  it('does not show a spinner for albums without an iframe', () => {
    renderAlbum(mockAlbumWithoutIframe.id)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('renders all tracklist items', () => {
    renderAlbum()
    mockAlbumWithIframe.tracklist.forEach((track) => {
      expect(screen.getByText(track)).toBeInTheDocument()
    })
  })

  it('renders all description paragraphs', () => {
    renderAlbum()
    mockAlbumWithIframe.description.forEach((paragraph) => {
      expect(screen.getByText(paragraph)).toBeInTheDocument()
    })
  })

  it('renders all credits', () => {
    renderAlbum()
    mockAlbumWithIframe.credits.forEach((credit) => {
      expect(screen.getByText(credit)).toBeInTheDocument()
    })
  })

  it('renders nothing for an empty credits list', () => {
    renderAlbum(mockAlbumWithoutIframe.id)
    expect(
      screen.getByRole('heading', {
        name: `${mockAlbumWithoutIframe.artist} - ${mockAlbumWithoutIframe.title}`,
      })
    ).toBeInTheDocument()
  })

  it('renders the back button', () => {
    renderAlbum()
    expect(screen.getByRole('button', { name: /back/i })).toBeInTheDocument()
  })

  it('spinner is shown again when a fresh album mounts', () => {
    const { unmount } = renderAlbum()
    fireEvent.load(screen.getByTitle(mockAlbumWithIframe.id))
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    unmount()

    renderAlbum()
    expect(screen.getByRole('status')).toBeInTheDocument()
  })
})
