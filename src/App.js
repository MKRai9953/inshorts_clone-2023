import { useState } from "react";
import "./App.css";
import Navinshorts from "./components/Navinshorts";
import NewsContent from "./NewsContent/NewsContent";

function App() {
  const [category, setcategory] = useState("general");

  const newsApi = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };
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
