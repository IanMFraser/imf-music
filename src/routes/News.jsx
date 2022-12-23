import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import data from '../data.json'

const Container = styled.div`
    max-width: 75%;
`

const Header = styled.h2`
    margin: 1rem 0;
`

const ListItem = styled.li`
    margin: 1rem 0;
`

function News() {
    const [news, setNews] = useState([])
    useEffect(() => {
        setNews(data.news)
    }, [])

    return (
        <Container>
            <Header>NEWS</Header>
            <ul>
                {news.map(item => {
                    return (
                        <ListItem key={item.id}>
                            <strong>
                                {`${item.date} `}
                                {item.category}
                            </strong>
                            {` ${item.content} `}
                            {item.link && (
                                <a
                                    className="newsLink hvrBounceIn"
                                    href={item.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {' >>'}{' '}
                                </a>
                            )}
                        </ListItem>
                    )
                })}
            </ul>
        </Container>
    )
}

export default News
