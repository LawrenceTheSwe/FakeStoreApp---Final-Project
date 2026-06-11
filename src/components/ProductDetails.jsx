import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Container, Button, Spinner, Alert, Modal } from "react-bootstrap";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch(() => setError("Failed to load product details."))
      .finally(() => setLoading(false));
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`https://fakestoreapi.com/products/${id}`);
      navigate("/products");
    } catch {
      setError("Failed to delete product.");
    }
  };

  if (loading) return <Spinner className="d-block mx-auto mt-5" />;
  if (error)
    return (
      <Alert variant="danger" className="m-4">
        {error}
      </Alert>
    );

  return (
    <Container className="mt-4">
      <img
        src={product.image}
        alt={product.title}
        style={{ maxHeight: "300px", objectFit: "contain" }}
      />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>
        <strong>Category:</strong> {product.category}
      </p>
      <h4>${product.price}</h4>

      <Button variant="success" className="me-2">
        Add to Cart
      </Button>
      <Button
        as={Link}
        to={`/edit-product/${id}`}
        variant="warning"
        className="me-2"
      >
        Edit
      </Button>
      <Button variant="danger" onClick={() => setShowModal(true)}>
        Delete
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this product?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ProductDetails;
