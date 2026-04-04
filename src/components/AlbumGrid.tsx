/**
 * Album catalogue grid displayed at the /music/albums index route.
 *
 * Renders a responsive grid of album artwork thumbnails. Each cell links
 * to the album's detail route using a relative path (the album's `id`).
 * If an album has no artwork URL, a placeholder image is shown instead.
 *
 * Title overlays are revealed on hover via the `.overlay` / `.albumTitle`
 * CSS classes defined in App.css.
 */
import type { AlbumData } from '../types'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import usePageTitle from '../hooks/usePageTitle'

interface AlbumGridProps {
  albums: AlbumData[]
  placeholderUrl: string
}

export default function AlbumGrid({ albums, placeholderUrl }: AlbumGridProps) {
  usePageTitle('Ian M Fraser | Music')

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
                    <Image
                      src={a.artwork}
                      alt={`${a.id} artwork`}
                      className="albumImage"
                    />
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
