import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Result } from "../utils/interfaces/ApiJson";

interface ArticleProps {
  articleDetails: Result;
}

const Article = function ({ articleDetails }: ArticleProps) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={articleDetails.image_url} />
      <Card.Body>
        <Card.Title>{articleDetails.title}</Card.Title>
        <Card.Text>{articleDetails.summary}</Card.Text>
        <Link to={`/${articleDetails.id}`}>
          <Button variant="primary">VAI ALL'ARTICOLO</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Article;
