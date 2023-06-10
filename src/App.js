import { useEffect, useState } from "react";
import "./App.css";
import Navinshorts from "./components/Navinshorts";
import NewsContent from "./NewsContent/NewsContent";
import axios from "axios";
import apiKey from "./config/config";
import Axios from "./config/apiconfig";

function App() {
  const [category, setcategory] = useState("general");
  const [news, setnews] = useState([]);
  const [newsResults, setnewsResults] = useState();

  const newsApi = async () => {
    try {
      const news = await Axios.get(
        `?country=in&category=${category}&apiKey=${apiKey}`
      );
      console.log(news);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
  }, []);
  return (
    <>
      <div className="App">
        <Navinshorts setcategory={setcategory} />
        <NewsContent />
      </div>
    </>
  );
}

export default App;
