import React from "react";
import "./NewsCard.css";

const NewsCard = ({ newsItem }) => {
  console.log(newsItem.author);
  const fullDate = new Date(newsItem.publishedAt);
  var date = fullDate.toString().split(" ");
  const hour = parseInt(date[4].substring(0, 2));
  const time = hour > 12 ? true : false;

  return (
    <div className="newsCard">
      <img
        src={
          newsItem.urlToImage
            ? newsItem.urlToImage
            : "https://www.allianceplast.com/wp-content/uploads/no-image-1024x1024.png"
        }
        alt={newsItem.title}
        className="newImage"
      />

      <div className="newText">
        <div>
          <span className="title">{newsItem.title}</span>
          <br />
          <span className="author">
            <a href={newsItem.url} target="blank">
              <strong>Short </strong>
            </a>
            <span className="muted">
              by {newsItem.author ? newsItem.author : "unknown"} /{" "}
              {time
                ? `${hour - 12}:${date[4].substring(3, 5)} pm`
                : `${hour}:${date[4].substring(3, 5)} am`}{" "}
              on {date[2]} {date[1]} {date[3]}, {date[0]}
            </span>
          </span>
        </div>
        <div className="lowerNewsText">
          <div className="description"></div>
          {newsItem.description}
          <span className="readmore">
            read more at
            <a href={newsItem.url} target="blank">
              <strong> {newsItem.source.name}</strong>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
