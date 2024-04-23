import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function FetchData() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  async function fetchAPI() {
    try {
      const fetchURL = await fetch(`https://fakestoreapi.com/products`);
      const dataJSON = await fetchURL.json();
      setData(dataJSON);
      console.log(dataJSON);
    } catch (error) {
      console.error(error);
      setError(error);
    }
  }

  useEffect(() => {
    fetchAPI();
    console.log(data);
  }, []);

  return (
    <>
      {error && <h1>Error to fetch data, refresh or change link.</h1>}
      {data &&
        data.map((product) => (
          <Card key={product.id} style={{ width: "18rem" }} className="mt-5">
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Link to={`/${product.id}`}>Go Somewhere</Link>
            </Card.Body>
          </Card>
        ))}
    </>
  );
}

export default FetchData;
