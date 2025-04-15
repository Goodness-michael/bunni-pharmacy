// import React from 'react'
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";






// const HealthBlog = () => {
//   return (
//     <section className="main">
//       <div className="health">
//         <h1>HEALTH BLOG </h1>
//       </div>
//       <div>
//         <p>
//           Stay updated with the latest health and beatuy tips from around the
//           globe we encourage you to Subscribe to latest news on our sign up page
//         </p>
//       </div>
//       <Container fluid>
//         {/* <div className='tittle-holder'>
//           <h2>exercise</h2>
//           <div className='subtitle'></div>

//         </div> */}
//         <Row>
//           <Col className="sm-4">
//             <div className="holder d-flex justify-items-space-between col-md-12  gap-3">
//               <div>

//               <Card>
//                 <Card.Img variant="top" src="holder.js/100px180" />
//                 <Card.Body>
//                   <Card.Title>Card Title</Card.Title>
//                   <Card.Text>
//                     Some quick example text to build on the card title and make
//                     up the bulk of the card's content.
//                   </Card.Text>
//                   <a href="#" className="btn btn-primary">
//                     Read More
//                   </a>
//                 </Card.Body>
//               </Card>
//               </div>
//             <div>
//               <Card>
//                 <Card.Img variant="top" src="holder.js/100px180" />
//                 <Card.Body>
//                   <Card.Title>Card Title</Card.Title>
//                   <Card.Text>
//                     Some quick example text to build on the card title and make
//                     up the bulk of the card's content.
//                   </Card.Text>
//                   <a href="#" className="btn btn-primary">
//                     Read More
//                   </a>
//                 </Card.Body>
//               </Card>
//             </div>
//             </div>
//             <div>
//               <Card>
//                 <Card.Img variant="top" src="holder.js/100px180" />
//                 <Card.Body>
//                   <Card.Title>Card Title</Card.Title>
//                   <Card.Text>
//                     Some quick example text to build on the card title and make
//                     up the bulk of the card's content.
//                   </Card.Text>
//                   <a href="#" className="btn btn-primary">
//                     Read More
//                   </a>
//                 </Card.Body>
//               </Card>
//             </div>
//             <div>
//               <Card>
//                 <Card.Img variant="top" src="holder.js/100px180" />
//                 <Card.Body>
//                   <Card.Title>Card Title</Card.Title>
//                   <Card.Text>
//                     Some quick example text to build on the card title and make
//                     up the bulk of the card's content.
//                   </Card.Text>
//                   <a href="#" className="btn btn-primary">
//                     Read More
//                   </a>
//                 </Card.Body>
//               </Card>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// }

// export default HealthBlog

import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { articles } from "../data/data";



const HealthBlog =()  =>{
  return (
    <div className="health-blog">
      <header className="blog-header">
        <h1>Healthy Living Blog</h1>
        <p>Your guide to wellness and balanced living</p>
      </header>

      <Container className="mt-5">
        <Row>
          {articles.map((article) => (
            <Col key={article.id} lg={4} md={6} className="mb-4">
              <Card className="h-100 blog-card">
                <Card.Img variant="top" src={article.image} />
                <Card.Body>
                  <div className="category-tag">{article.category}</div>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>{article.excerpt}</Card.Text>
                  <button className="read-more-btn">Read More</button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default HealthBlog;