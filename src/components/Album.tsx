import { useEffect, useState } from 'react'
import type { AlbumData } from '../types'
import { useParams } from 'react-router-dom'
import BackButton from './BackButton'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'
import usePageTitle from '../hooks/usePageTitle'

interface AlbumProps {
  albums: AlbumData[]
}

const Album = ({ albums }: AlbumProps) => {
  const { albumId } = useParams<{ albumId: string }>()
  const album = albums.find((a) => a.id === albumId)!
  const [iframeLoaded, setIframeLoaded] = useState(false)

  usePageTitle(`${album.artist} - ${album.title} | Ian M Fraser`)

  useEffect(() => {
    setIframeLoaded(false)
  }, [albumId])

  return (
    <Container>
      <h2>{`${album.artist} - ${album.title}`}</h2>
      <div>
        {album.iframeSrc ? (
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
              title={album.id}
              style={{
                border: '0',
                width: '350px',
                height: '350px',
                opacity: iframeLoaded ? 1 : 0,
              }}
              src={album.iframeSrc}
              allow="autoplay; encrypted-media; fullscreen"
              onLoad={() => setIframeLoaded(true)}
            >
              <a
                href={album.mediaLink}
              >{`${album.title} by ${album.artist}`}</a>
            </iframe>
          </div>
        ) : (
          <img
            src={album.artwork}
            alt={`${album.title} artwork`}
            style={{ width: '320px' }}
          />
        )}
      </div>
      <div className="ms-4">
        <ol>
          {album.tracklist.length > 0 &&
            album.tracklist.map((t, i) => <li key={i}>{t}</li>)}
        </ol>
      </div>
      <div className="ms-1">
        {album.description.length > 0 &&
          album.description.map((d, i) => <p key={i}>{d}</p>)}
      </div>
      <div className="ms-1">
        {album.credits.length > 0 &&
          album.credits.map((c, i) => <p key={i}>{c}</p>)}
      </div>
      <br />
      <BackButton />
    </Container>
  )
}

export default Album
