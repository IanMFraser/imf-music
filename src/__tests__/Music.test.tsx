import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import Music from '../components/Music'
import albums from '../data/albums.json'

const firstAlbum = albums[0]

const renderMusicAtIndex = () =>
  render(
    <MemoryRouter initialEntries={['/music/albums']}>
      <Routes>
        <Route path="/music/albums/*" element={<Music />} />
      </Routes>
    </MemoryRouter>
  )

const renderMusicAtAlbum = (albumId = firstAlbum.id) =>
  render(
    <MemoryRouter initialEntries={[`/music/albums/${albumId}`]}>
      <Routes>
        <Route path="/music/albums/*" element={<Music />} />
      </Routes>
    </MemoryRouter>
  )

describe('Music', () => {
  it('renders without crashing', () => {
    renderMusicAtIndex()
  })

  it('renders AlbumGrid at the index route', () => {
    renderMusicAtIndex()
    expect(
      screen.getByRole('heading', { name: /computer music/i })
    ).toBeInTheDocument()
  })

  it('renders Album at the :albumId route', () => {
    renderMusicAtAlbum()
    expect(
      screen.getByRole('heading', {
        name: `${firstAlbum.artist} - ${firstAlbum.title}`,
      })
    ).toBeInTheDocument()
  })
})
