import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import Music from '../components/Music'
import data from '../data.json'

const renderMusic = () =>
  render(
    <MemoryRouter initialEntries={['/music/albums']}>
      <Routes>
        <Route path="/music/albums/*" element={<Music />} />
      </Routes>
    </MemoryRouter>
  )

describe('Music (album grid)', () => {
  beforeEach(() => {
    document.title = ''
  })

  it('renders without crashing', () => {
    renderMusic()
  })

  it('renders the Computer Music heading', () => {
    renderMusic()
    expect(screen.getByRole('heading', { name: /computer music/i })).toBeInTheDocument()
  })

  it('sets the document title', () => {
    renderMusic()
    expect(document.title).toBe('Ian M Fraser | Music')
  })

  it('renders an image for every album', () => {
    renderMusic()
    data.albums.forEach((album) => {
      expect(screen.getByAltText(`${album.id} artwork`)).toBeInTheDocument()
    })
  })

  it('renders a link for every album', () => {
    renderMusic()
    const links = screen.getAllByRole('link')
    expect(links.length).toBe(data.albums.length)
  })

  it('renders the title overlay for the first album', () => {
    renderMusic()
    expect(screen.getByText(data.albums[0].title)).toBeInTheDocument()
  })

  it('renders the title overlay for every album', () => {
    renderMusic()
    data.albums.forEach((album) => {
      expect(screen.getByText(album.title)).toBeInTheDocument()
    })
  })

  it('each album link navigates to its detail route', () => {
    renderMusic()
    const links = screen.getAllByRole('link')
    data.albums.forEach((album, i) => {
      expect(links[i]).toHaveAttribute('href', `/music/albums/${album.id}`)
    })
  })
})
