/**
 * Archived news list displayed below the current news on the Home page.
 *
 * Reads the `oldNews` array from news.json and renders each item as a
 * Bootstrap ListGroup entry showing date, category, and content.
 * Items with a non-empty `link` value render an ExternalLink; others do not.
 */
import newsData from '../data/news.json'
import type { NewsItem } from '../types'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import ExternalLink from './ExternalLink'

export default function OldNews() {
  const oldNews = newsData.oldNews as NewsItem[]

  return (
    <Card className="border-0">
      <Card.Header as="h2" className="border-0 px-0">
        OLD NEWS
      </Card.Header>
      <ListGroup variant="flush" as="ul">
        {oldNews.map((news) => {
          return (
            <ListGroup.Item
              key={news.id}
              as="li"
              className="mt-2 border-0 px-0"
            >
              <strong>
                {`${news.date} `}
                {news.category}
              </strong>
              {` ${news.content} `}
              {news.link && <ExternalLink href={news.link} />}
            </ListGroup.Item>
          )
        })}
      </ListGroup>
    </Card>
  )
}
