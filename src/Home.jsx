import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container className="text-center mt-5">
      <h1>Welcome to FakeStore</h1>
      <p className="lead">
        Browse, create, update, and delete products using FakeStoreAPI.
      </p>
      <Button as={Link} to="/products" variant="primary">
        View Products
      </Button>
    </Container>
  );
}

export default Home;
