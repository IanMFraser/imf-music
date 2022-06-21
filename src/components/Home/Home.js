import React from "react";
import News from "./News/News";
import OldNews from "./OldNews/OldNews";
import Container from "react-bootstrap/Container";
import data from "../../data.json";

const Home = () => {
  const currentNews = data.news.currentNews;
  const oldNews = data.news.oldNews;
  return (
    <>
      <Container>
        <News data={currentNews} />
        <OldNews data={oldNews} />
      </Container>
    </>
  );
};

export default Home;
