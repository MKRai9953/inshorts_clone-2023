import { useEffect, useState } from "react";
import "./App.css";
import Navinshorts from "./components/Navinshorts";
import NewsContent from "./NewsContent/NewsContent";
// import axios from "axios";
// import apiKey from "./config/config";
import Axios from "./config/apiconfig";
import categories from "./config/category";
import Footer from "./components/Footer/Footer";

function App() {
  const [category, setcategory] = useState("general");
  const [news, setNews] = useState([]);
  const [newsResults, setNewsResults] = useState(0);
  const [loadmore, setloadmore] = useState(20);
  const [loading, setloading] = useState(false);

  const newsApi = async () => {
    try {
      setloading(true);
      const news = await Axios.get(
        `?country=in&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=${loadmore}`
        // `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}&pageSize=${loadmore}`
      );
      setloading(false);
      setNewsResults(news?.totalResults);
      setNews(news?.articles);
      console.log(news?.data?.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(process.env);
  useEffect(() => {
    newsApi();
  }, [newsResults, category, loadmore]);
  return (
    <>
      <div className="App">
        <Navinshorts setcategory={setcategory} />
        <NewsContent
          news={news}
          newsResults={newsResults}
          loadmore={loadmore}
          setloadmore={setloadmore}
          loading={loading}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
