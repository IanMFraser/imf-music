import { useEffect } from 'react'
import type { AlbumData } from '../types'
import { Link, Routes, Route } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Album from './Album'
import data from '../data.json'

interface AlbumGridProps {
  albums: AlbumData[]
  placeholderUrl: string
}

function AlbumGrid({ albums, placeholderUrl }: AlbumGridProps) {
  useEffect(() => {
    document.title = 'Ian M Fraser | Music'
  }, [])

  return (
    <Container>
      <h1>Computer Music</h1>
      <div className="albumGrid">
        {albums.map((a) => {
          return (
            <div key={`${a.id}`} className="imgCell p-2">
              <Link to={a.id}>
                <span>
                  {a.artwork ? (
                    <Image src={a.artwork} alt={`${a.id} artwork`} className="albumImage" />
                  ) : (
                    <Image src={placeholderUrl} alt={`${a.id} artwork`} />
                  )}
                </span>
                <div className="overlay">
                  <div className="albumTitle">{a.title}</div>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </Container>
  )
}

export default function Music() {
  const albums = data.albums as AlbumData[]
  const placeholderUrl = 'https://via.placeholder.com/320'

  return (
    <main>
      <Routes>
        <Route index element={<AlbumGrid albums={albums} placeholderUrl={placeholderUrl} />} />
        <Route path=":albumId" element={<Album albums={albums} />} />
      </Routes>
    </main>
  )
}
