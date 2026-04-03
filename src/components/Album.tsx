import { useEffect, useState } from 'react'
import type { AlbumData } from '../types'
import { useParams } from 'react-router-dom'
import BackButton from './BackButton'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'

interface AlbumProps {
  albums: AlbumData[]
}

const Album = ({ albums }: AlbumProps) => {
  const { albumId } = useParams<{ albumId: string }>()
  const album = albums.filter((a) => a.id === albumId)
  const [iframeLoaded, setIframeLoaded] = useState(false)

  useEffect(() => {
    document.title = `${album[0].artist} - ${album[0].title} | Ian M Fraser`
    setIframeLoaded(false)
  }, [albumId])

  return (
    <Container>
      <h2>{`${album[0].artist} - ${album[0].title}`}</h2>
      <div>
        {album[0].iframeSrc ? (
          <div
            style={{ position: 'relative', width: '350px', height: '350px' }}
          >
            {!iframeLoaded && (
              <Spinner
                animation="border"
                role="status"
                style={{
                  width: '350px',
                  height: '350px',
                  borderWidth: '3px',
                }}
              >
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
            <iframe
              title={album[0].id}
              style={{
                border: '0',
                width: '350px',
                height: '350px',
                opacity: iframeLoaded ? 1 : 0,
              }}
              src={album[0].iframeSrc}
              allow="autoplay; encrypted-media; fullscreen"
              onLoad={() => setIframeLoaded(true)}
            >
              <a
                href={album[0].mediaLink}
              >{`${album[0].title} by ${album[0].artist}`}</a>
            </iframe>
          </div>
        ) : (
          <img
            src={album[0].artwork}
            alt={`${album[0].title} artwork`}
            style={{ width: '320px' }}
          />
        )}
      </div>
      <div className="ms-4">
        <ol>
          {album[0].tracklist.length > 0 &&
            album[0].tracklist.map((t, i) => <li key={i}>{t}</li>)}
        </ol>
      </div>
      <div className="ms-1">
        {album[0].description.length > 0 &&
          album[0].description.map((d, i) => <p key={i}>{d}</p>)}
      </div>
      <div className="ms-1">
        {album[0].credits.length > 0 &&
          album[0].credits.map((c, i) => <p key={i}>{c}</p>)}
      </div>
      <br />
      <BackButton />
    </Container>
  )
}

export default Album
