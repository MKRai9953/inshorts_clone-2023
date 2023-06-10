import { useEffect, useState } from "react";
import "./App.css";
import Navinshorts from "./components/Navinshorts";
import NewsContent from "./NewsContent/NewsContent";
import axios from "axios";
import apiKey from "./config/config";
import Axios from "./config/apiconfig";
import categories from "./config/category";
import Footer from "./components/Footer/Footer";

function App() {
  const [category, setcategory] = useState("general");
  const [news, setnews] = useState([]);
  const [newsResults, setnewsResults] = useState();

  const newsApi = async () => {
    try {
      const news = await Axios.get(
        `?country=in&category=${category}&apiKey=${apiKey}`
      );
      setnews(news.articles);
      console.log(news);
      setnewsResults(news.totalResults);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(news);
  useEffect(() => {
    newsApi();
  }, [newsResults, category]);
  return (
    <>
      <div className="App">
        <Navinshorts setcategory={setcategory} />
        <NewsContent />
        <Footer />
      </div>
    </>
  );
}

export default App;
