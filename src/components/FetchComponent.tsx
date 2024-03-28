import { useEffect, useState } from "react";
import { Data, Result } from "../utils/interfaces/ApiJson";
import Article from "./Article";
const FetchComponent = function () {
  const [articles, setArticles] = useState<Result[]>([]);

  const fetchArticles = async function () {
    try {
      const res = await fetch("https://api.spaceflightnewsapi.net/v4/articles");
      if (res.ok) {
        const arrayofArticles: Data = await res.json();
        setArticles(arrayofArticles.results);
      } else {
        throw new Error("problema nella chiamata API");
      }
    } catch (e) {
      console.log("ERRORE", e);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div>
      <h2>ARTICOLI RECUPERATI DA API</h2>
      {articles.map((article) => (
        <Article articleDetails={article} key={article.id} />
      ))}
    </div>
  );
};

export default FetchComponent;
