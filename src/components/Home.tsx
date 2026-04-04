/**
 * Home page — the default landing view at /music.
 *
 * Composes the News (current featured item) and OldNews (archived list)
 * sections inside a Bootstrap Container, and sets the document title.
 */
import News from './News'
import OldNews from './OldNews'
import Container from 'react-bootstrap/Container'
import usePageTitle from '../hooks/usePageTitle'

export default function Home() {
  usePageTitle('Ian M Fraser | Computer Music')

  return (
    <main>
      <Container>
        <News />
        <OldNews />
      </Container>
    </main>
  )
}
