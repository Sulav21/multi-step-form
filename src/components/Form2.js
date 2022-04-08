import React from 'react'
import {Form} from 'react-bootstrap'
export const Form2 = ({data,setData}) => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label><strong>Experience (in years)</strong></Form.Label>
        <Form.Control value={data.Experience} onChange={(e)=>setData({...data,Experience:e.target.value})} type="text" placeholder="Experience" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label><strong>Current Job</strong></Form.Label>
        <Form.Control value={data.CurrentJob} onChange={(e)=>setData({...data,CurrentJob:e.target.value})} type="text" placeholder="Current Job" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><strong>Previous Job</strong></Form.Label>
        <Form.Control value={data.PreviousJob} onChange={(e)=>setData({...data,PreviousJob:e.target.value})} type="email" placeholder="Previous Job" />
      </Form.Group>
    </Form>
  )
}
