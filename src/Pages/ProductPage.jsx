import React from "react";
import { products } from "../data/data";
//
import Header from "../Components/Header";
import { useState } from "react";
import { Container, Row, Col, Card, Button, Form, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  const categories = [
    "All Products",
    "Vitamins & Supplements",
    "Pain Relief",
    "Cold & Flu",
    "Skin Care",
    "First Aid",
    "Personal Care",
  ];

  

  const filteredProducts = products.filter(
    (product) =>
      (activeCategory === "All Products" ||
        product.category === activeCategory) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirtProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirtProduct, indexOfLastProduct)
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
  const handleNext = () =>{
    if(currentPage < totalPages){
      setCurrentPage(currentPage + 1)
    }
  }
  const handlePrev = () =>{
    if(currentPage > 1){
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div>
      <Header/>
      
      <section className="bg-success-custom text-white py-5" id="title">

        
        <Container>
          <Row className="justify-content-center">
            <Col md={6} className="text-center">
              <h1 className="display-4 fw-bold mb-3 bg-success rounded-5">
                Our Products
              </h1>
              <p className="lead">
                Browse our wide range of quality healthcare products to support
                your wellbeing.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <Row className="mb-4">
            <Col md={6}>
              <Form.Control
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Col>
            <Col
              md={8}
              className="d-flex justify-content-md-end align-items-center mt-3 mt-md-0"
            >
              <span className="me-2">Sort by:</span>
              <Form.Select style={{ width: "auto" }}>
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </Form.Select>
            </Col>
          </Row>

          <Nav variant="tabs" className="mb-4 flex-wrap">
            {categories.map((category) => (
              <Nav.Item key={category}>
                <Nav.Link
                  eventKey={category}
                  active={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>

          <Row>
            {currentProducts.map((product) => (
              <Col key={product.id} lg={3} md={4} sm={6} className="mb-4">
                <Card className="h-100">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.name}
                    className="h-50 object-fit-cover"
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <div className="mt-auto">
                      <p className="fw-bold text-success-custom mb-2">
                        {product.price}
                      </p>
                      <Button
                        as={Link}
                        to={`/products/${product.id}`}
                        variant="success"
                        className="w-100"
                      >
                        View Details
                      </Button>
                      <Button varriant="success" className="my-2">
                        Add to Cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

        
          
              
              <button onClick={handlePrev}>Previous</button>
              
          {currentPage}
             <button onClick={handleNext}>
              Next
             </button>
       
        </Container>
      </section>
    </div>
  );
};

export default Products;
