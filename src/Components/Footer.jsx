// import React from "react";
// import { FiFacebook, FiYoutube } from "react-icons/fi";
// import { FaInstagram } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { MdCall } from "react-icons/md";

// const Footer = () => {
//   const logos = [
//     <FiFacebook />,
//     <FaXTwitter />,
//     <FaInstagram />,
//     <FiYoutube />,
//     <MdCall />,
//   ];
//   return (
//     <footer className=" bg-success py-5 text-white">
//       <div className=" row text-center d-flex justify-content-between mx-4 py-4 gap-4 text-align-end ">
//         <div className="col-lg-3">
//           <h2>About Us</h2>
//           <p>
//             Bunni Pharmarcy is a pharmaceutical company that is focused on the
//             production of health and beauty products and dispensing of drug.We
//             promote health awareness to our community to encourage healthy
//             living.
//           </p>
//         </div>
//         <div className="col-lg-3">
//           <h2>Contact Us</h2>
//           <p>You can always reach us by through our contactlines:07036902565 </p>
//           <p>Email:bunnipharmaceuticals@gmail.com</p>
//         </div>
//         <div className="col-lg-3">
//           <h2>Social</h2>
//           <p><FaInstagram/>  Buni_pharm </p>
//           <p> <MdCall/> call us: 09135441904 </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-success text-light py-5">
      <Container>
        <Row className="gy-4">
          {/* Contact Information */}
          <Col md={4}>
            <h3 className="h5 mb-4">Contact Us</h3>
            <ul className="list-unstyled">
              <li className="d-flex mb-3">
                <MapPin className="me-2 flex-shrink-0" />
                <span>Behind timber market, ikot-ekpene road Umuahia</span>
              </li>
              <li className="d-flex mb-3">
                <Phone className="me-2 flex-shrink-0" />
                <span>(070)36902565</span>
              </li>
              <li className="d-flex mb-3">
                <Mail className="me-2 flex-shrink-0" />
                <span>info@Bunnipharmacy.com</span>
              </li>
              <li className="d-flex">
                <Clock className="me-2 flex-shrink-0" />
                <div>
                  <p className="mb-1">Mon-Fri: 8:00 AM - 9:00 PM</p>
                  <p className="mb-0">Sat-Sun: 9:00 AM - 6:00 PM</p>
                </div>
              </li>
            </ul>
          </Col>

          {/* Quick Links */}
          <Col md={4}>
            <h3 className="h5 mb-4 fw-5">Quick Links</h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/about" className="text-light text-decoration-none">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="./HealthBlog" className="text-light text-decoration-none">
                  Health Blog
                </a>
              </li>
              <li className="mb-2">
                <a href="/ProductPage" className="text-light text-decoration-none">
                  Products
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  Prescription Refills
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  Health Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  Careers
                </a>
              </li>
            </ul>
          </Col>

          {/* Newsletter */}
          <Col md={4}>
            <h3 className="h5 mb-4">Stay Updated</h3>
            <p className="mb-4">
              Subscribe to our newsletter for health tips and special offers.
            </p>
            <Form className="mb-4">
              <div className="input-group">
                <Form.Control
                  type="email"
                  placeholder="Your email"
                  aria-label="Your email"
                />
                <Button variant="primary" type="submit">
                  Subscribe
                </Button>
              </div>
            </Form>
            <div className="d-flex gap-3">
              <a href="#" className="text-light">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-light">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-light">
                <Instagram size={24} />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="my-4" />

        <div className="text-center">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} MediCare Pharmacy. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;