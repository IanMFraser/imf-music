import React from 'react'
import data from '../data.json'
import Badge from 'react-bootstrap/Badge'
import Card from 'react-bootstrap/Card'

const News = () => {

    const currentNews = data.news.currentNews

    return(
        <Card className="border-0">
            <Card.Header as="h1" className="border-0">News</Card.Header>
            <Card.Body>
                <Card.Title className="mx-2">{currentNews.title}</Card.Title>
                <Card.Subtitle className="m-2 text-muted">
                    {currentNews.date} 
                    <Badge variant="info" className="ml-2">{currentNews.category}</Badge>
                </Card.Subtitle>
                <Card.Img src={currentNews.images} className="mt-4"></Card.Img>
                <Card.Text className="mt-4">{currentNews.content} {currentNews.link && <a className="newsLink hvrBounceIn" href={currentNews.link} target="_blank" rel="noreferrer">{ '>>'} </a>}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default News