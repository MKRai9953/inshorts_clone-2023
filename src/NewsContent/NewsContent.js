import { Container } from "@mui/material";
import React from "react";
import "./NewsContent.css";
import NewsCard from "../components/NewsCard/NewsCard";
import Skeleton from "../components/NewsCard/Skeleton";

const NewsContent = ({ news, newsResults, loadmore, setloadmore, loading }) => {
  console.log(loadmore, newsResults);
  return (
    <Container maxWidth="md">
      <div className="content">
        <div className="downloadMessage">
          <span className="downloadText">
            For the best experience use inshorts app on your smartphones
          </span>
          <img
            alt="app-store"
            height="80%"
            src="	https://assets.inshorts.com/website_assets/images/appstore.png"
          />
          <img
            alt="app-store"
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/playstore.png"
          />
        </div>
        {loading ? (
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        ) : (
          <>
            {news?.map((newsItem) => (
              <NewsCard newsItem={newsItem} key={newsItem.title} />
            ))}
            {loadmore <= newsResults && (
              <>
                <hr />
                <button
                  className="loadMore"
                  onClick={() => setloadmore(loadmore + 20)}
                >
                  Load More
                </button>
              </>
            )}
          </>
        )}

        {/* <button className="loadMore">Load More</button> */}
      </div>
    </Container>
  );
};

export default NewsContent;
