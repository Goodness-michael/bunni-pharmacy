// import React from 'react'
import Layout from '../Components/Layout'

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp= () => {
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(`Subscribed with: \nFirst Name: ${firstName} \nSurname: ${surname} \nEmail: ${email}`);
    // Here you can handle the form submission logic, such as sending the data to an API.
  };

  return (
    <div
      className="container-s "
      style={{ maxWidth: "100%", marginTop: "100px", padding: "100px" , }}
    >
      <h2 className="text-center">Subscribe to our Newsletter</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formFirstName">
          <Form.Label>First Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={{ height: "100px" }}
          />
        </Form.Group>

        <Form.Group controlId="formSurname">
          <Form.Label>Surname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            style={{ height: "100px" }}
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ height: "100px" }}
          />
        </Form.Group>

        <Button
          variant="success"
          type="submit"
          block
          style={{ height: "100px", width:"100%", marginTop:"50px",  borderRadius:"50px"} }
        >
          Subscribe
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;

// const SignUp = () => {
//   return (
//     <div>
//       <h1>welcome to our sign up page</h1>
//       <p>sign up to recieve monthly news later on drugs and suppliments available in our stores</p>
//       <div>
//         <form action="">
//           <label htmlFor="">Name :</label>
//           <input type="text" id='name' placeholder='What is your name?' />
//           <label htmlFor="">Email :</label>
//           <input type="email"  id='email'/>
//           <label htmlFor=""> Subscribe:</label>
//           <input type="text" />
//         </form>
//       </div>
//     </div>
//   )
// }


