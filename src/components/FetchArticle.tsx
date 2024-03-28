import { useEffect, useState } from "react";
import { Result } from "../utils/interfaces/ApiJson";
import Article from "./Article";
import { useParams } from "react-router-dom";

const FetchArticle = function () {
  const [article, setArticle] = useState<Result>();
  const params = useParams();
  const baseEndpoint = "https://api.spaceflightnewsapi.net/v4/articles/";

  const fetchSingleArticle = async function () {
    try {
      const response = await fetch(baseEndpoint + params.article);
      if (response.ok) {
        const singleArticle: Result = await response.json();
        setArticle(singleArticle);
      } else {
        throw new Error("problema nella chiamata API");
      }
    } catch (e) {
      console.log("ERRORE", e);
    }
  };

  useEffect(() => {
    fetchSingleArticle();
  }, []);

  return (
    <div>
      <h2>ARTICOLI RECUPERATI DA API</h2>
      {article && <Article articleDetails={article} />}
    </div>
  );
};

export default FetchArticle;
