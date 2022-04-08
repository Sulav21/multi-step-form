import React from "react";
import {Form} from 'react-bootstrap'
export const Form1 = ({data, setData}) => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label><strong>First Name</strong></Form.Label>
        <Form.Control value={data.FirstName} onChange={(e)=>setData({...data,FirstName:e.target.value})} type="text" placeholder="Enter first name" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label><strong>Last Name</strong></Form.Label>
        <Form.Control value={data.LastName} onChange={(e)=>setData({...data,LastName:e.target.value})} type="text" placeholder="Enter last name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><strong>Email address</strong></Form.Label>
        <Form.Control value={data.Email} onChange={(e)=>setData({...data,Email:e.target.value})} type="email" placeholder="Enter email" />
      </Form.Group>
    </Form>
  );
};
