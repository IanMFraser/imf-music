/**
 * Current news section displayed at the top of the Home page.
 *
 * Reads the `currentNews` entry from news.json and renders the title,
 * date, category, image, content text, and an optional external link.
 * The link is only rendered when the `link` field is non-empty.
 */
import newsData from '../data/news.json'
import type { CurrentNews } from '../types'
import Card from 'react-bootstrap/Card'
import ExternalLink from './ExternalLink'

const News = () => {
  const currentNews = newsData.currentNews as CurrentNews

  return (
    <Card className="border-0">
      <Card.Header as="h1" className="border-0 px-0">
        News
      </Card.Header>
      <Card.Body className="px-0">
        <Card.Title className="me-2">{currentNews.title}</Card.Title>
        <Card.Subtitle className="m-2 text-muted">
          {currentNews.date}
          <span className="ms-2">{currentNews.category}</span>
        </Card.Subtitle>
        <Card.Img src={currentNews.images} className="mt-4"></Card.Img>
        <Card.Text className="mt-4">
          {currentNews.content}{' '}
          {currentNews.link && <ExternalLink href={currentNews.link} />}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default News
