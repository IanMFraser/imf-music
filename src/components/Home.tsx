import { useEffect } from 'react'
import News from './News'
import OldNews from './OldNews'
import Container from 'react-bootstrap/Container'

export default function Home() {
  useEffect(() => {
    document.title = 'Ian M Fraser | Computer Music'
  }, [])

  return (
    <main>
      <Container>
        <News />
        <OldNews />
      </Container>
    </main>
  )
}
