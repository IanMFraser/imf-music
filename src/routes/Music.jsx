import React from 'react'
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Album from '../components/Album'
import data from '../data.json'

function Music() {
    const { path, url } = useRouteMatch()
    const { albums } = data
    const placeholderUrl = 'https://via.placeholder.com/320'

    return (
        <main>
            <Switch>
                <Route exact path={path}>
                    <Container>
                        <h1>Computer Music</h1>
                        <div className="albumGrid">
                            {albums.map(a => {
                                return (
                                    <div key={`${a.id}`} sm={6} md={3} className="imgCell p-2">
                                        <Link to={`${url}/${a.id}`}>
                                            <span>
                                                {a.artwork ? (
                                                    <Image
                                                        src={a.artwork}
                                                        alt={`${a.id} artwork`}
                                                        className="albumImage"
                                                    />
                                                ) : (
                                                    <Image
                                                        src={placeholderUrl}
                                                        alt={`${a.id} artwork`}
                                                    />
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
                </Route>
                <Route path={`${path}/:albumId`}>
                    <Album albums={albums} />
                </Route>
            </Switch>
        </main>
    )
}

export default Music
