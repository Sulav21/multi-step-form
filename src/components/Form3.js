import React from "react";
import { Form } from "react-bootstrap";

export const Form3 = () => {
  return (
    <>
      <Form>
        <Form.Check type="checkbox" id="check-box" label="Html" />
        <Form.Check type="checkbox" id="check-box" label="CSS" />
        <Form.Check type="checkbox" id="check-box" label="JavaScript" />
        <Form.Check type="checkbox" id="check-box" label="React" />
        <Form.Check type="checkbox" id="check-box" label="Node.js" />
        <Form.Check type="checkbox" id="check-box" label="MongoDB" />
        <Form.Check type="checkbox" id="check-box" label="AWS" />
        <Form.Check type="checkbox" id="check-box" label="GitHub" />
        <Form.Check type="checkbox" id="check-box" label="Rest API" />
        <Form.Check type="checkbox" id="check-box" label="TypeScript" />        
        <Form.Check type="checkbox" id="check-box" label="TailWind CSS" />
      </Form>
    </>
  );
};
