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
