import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={product.image}
        style={{ height: "200px", objectFit: "contain", padding: "20px" }}
      />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <Button as={Link} to={`/products/${product.id}`} variant="primary">
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
