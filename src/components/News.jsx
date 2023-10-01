import React from 'react'
import data from '../data.json'
import Card from 'react-bootstrap/Card'

const News = () => {

    const currentNews = data.news.currentNews

    return(
        <Card className="border-0">
            <Card.Header as="h1" className="border-0 px-0">News</Card.Header>
            <Card.Body className="px-0">
                <Card.Title className="mr-2">{currentNews.title}</Card.Title>
                <Card.Subtitle className="m-2 text-muted">
                    {currentNews.date} 
                    <span className="ml-2">{currentNews.category}</span>
                </Card.Subtitle>
                <Card.Img src={currentNews.images} className="mt-4"></Card.Img>
                <Card.Text className="mt-4">{currentNews.content} {currentNews.link && <a className="newsLink hvrBounceIn" href={currentNews.link} target="_blank" rel="noreferrer">{ '>>'} </a>}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default News