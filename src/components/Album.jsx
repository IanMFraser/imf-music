import React from 'react'
import { useParams, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container'
import BackButton from './BackButton'

function Album({ albums }) {
    const { albumId } = useParams()
    const album = albums.filter(a => a.id === albumId)

    return (
        <Container>
            <h2>{`${album[0].artist} - ${album[0].title}`}</h2>
            <div>
                {album[0].iframeSrc ? (
                    <iframe
                        title={album[0].id}
                        style={{ border: '0', width: '350px', height: '350px' }}
                        src={album[0].iframeSrc}
                    >
                        <a href={album[0].mediaLink}>{`${album[0].title} by ${album[0].artist}`}</a>
                    </iframe>
                ) : (
                    <img
                        src={album[0].artwork}
                        alt={`${album[0].title} artwork`}
                        style={{ width: '320px' }}
                    />
                )}
            </div>
            <div className="ml-4">
                <ol>
                    {album[0].tracklist.length > 0 &&
                        album[0].tracklist.map(t => <li key={album[0].id}>{t}</li>)}
                </ol>
            </div>
            <div className="ml-1">
                {album[0].description.length > 0 &&
                    album[0].description.map(d => <p key={album[0].id}>{d}</p>)}
            </div>
            <div className="ml-1">
                {album[0].credits.length > 0 &&
                    album[0].credits.map(c => <p key={album[0].id}>{c}</p>)}
            </div>
            <br />
            <BackButton />
        </Container>
    )
}

export default withRouter(Album)

Album.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types, react/require-default-props
    albums: PropTypes.array,
}
