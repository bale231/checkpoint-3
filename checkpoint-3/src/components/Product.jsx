import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Link, useParams } from "react-router-dom";

function Product() {
  const [dataSingle, setDataSingle] = useState([]);
  const [error, setError] = useState(false);
  const { product } = useParams();

  async function fetchProduct() {
    try {
      const fetchSingle = await fetch(
        `https://fakestoreapi.com/products/${product}`
      );
      const jsonSingle = await fetchSingle.json();
      setDataSingle(jsonSingle);
    } catch (error) {
      console.error(error);
      setError(error);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, [product]);

  return (
    <div>
      {error && <h1>Error to fetch data, refresh or change link.</h1>}
      {dataSingle && (
        <Card key={dataSingle.id} style={{ width: "18rem" }} className="mt-5">
          <Card.Img variant="top" src={dataSingle.image} />
          <Card.Body>
            <Card.Title>{dataSingle.title}</Card.Title>
            <Card.Text>{dataSingle.description}</Card.Text>
            <Link to="/">Go back</Link>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default Product;
