/**
 * Music section — handles nested routing under /music/albums.
 *
 * Index route renders AlbumGrid (the full catalogue view).
 * The :albumId route renders the Album detail page for a specific release.
 *
 * Album data is loaded once here from albums.json and passed as props
 * so both child routes share the same data source.
 */
import type { AlbumData } from '../types'
import { Routes, Route } from 'react-router-dom'
import Album from './Album'
import AlbumGrid from './AlbumGrid'
import albums from '../data/albums.json'

export default function Music() {
  const placeholderUrl = 'https://via.placeholder.com/320'
  const albumList = albums as AlbumData[]

  return (
    <main>
      <Routes>
        <Route
          index
          element={
            <AlbumGrid albums={albumList} placeholderUrl={placeholderUrl} />
          }
        />
        <Route path=":albumId" element={<Album albums={albumList} />} />
      </Routes>
    </main>
  )
}
