import './App.css';
import {useState} from 'react';
import { Form1 } from './components/Form1';
import { Form2 } from './components/Form2';
import { Form3 } from './components/Form3';
import { Row,Col,Button } from 'react-bootstrap';
import { LastPage } from './components/LastPage';

const App=()=> {
 
  const [page, setPage] = useState(0)
  const [submitPage, setSubmitPage] = useState(false)
  const [data, setData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Experience:'',
    CurrentJob:'',
    PreviousJob:''
  })
  const title = ['Personal Details','Work Experience','Skills']
const handleOnClick =()=>{
  setSubmitPage(true)
  setPage((final)=>final+1)
}
  return (
    <>
    <h2 className='heading fw-bolder'>Job Application Form</h2>
    <div className='wrapper container'> 
        <h2 className='mb-3 text-center'>{title[page]}</h2>
        <div className='mt-4 mb-5'>
       {page===0 && <Form1 data={data} setData={setData}/>}
        {page===1 && <Form2 data={data} setData={setData} />}
        {page===2 && <Form3 data={data} setData={setData}/>}
        {submitPage===true && <LastPage/>}
        </div>
        <Row>
          <Col>
        {page===1 || page===2 ? <Button className='px-4 py-2' onClick={()=>setPage((npage)=>npage-1)} variant="success">Back</Button>:''}
        </Col>
        <Col>
        {page===0 || page===1 ?<Button className='px-4 py-2' onClick={()=>setPage((cPage)=>cPage+1)} variant="success">Next</Button>:''}
        </Col>
        <Col>
        {page===2 && <Button className='px-3 py-2' onClick={handleOnClick} variant="success">Submit</Button>}
        </Col>
        </Row>
    </div>
    </>
  );
}

export default App;
