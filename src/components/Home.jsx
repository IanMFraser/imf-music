import React from 'react'
import News from './News'
import OldNews from './OldNews'
import Container from 'react-bootstrap/Container'

export default function Home() {
    return (
        <main>
            <Container>
                <News />
                <OldNews />
            </Container>
        </main>
    )
}
