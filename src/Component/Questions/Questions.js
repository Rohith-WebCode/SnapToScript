import React,{useEffect} from "react";
import './Questions.css'
import Accordion from 'react-bootstrap/Accordion';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function Questions() {
  const navigate = useNavigate()
  const Clicklink = ()=>{
    navigate('/')
    console.log('hai');
  }
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const section = searchParams.get('section');

  useEffect(() => {
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [section]);

  return (
    <Accordion defaultActiveKey="0" flush className="Drop-head" id="FAQs">
      <Accordion.Item eventKey="0" className="Itam-box">
        <Accordion.Header>How To Copy Text From Image?</Accordion.Header>
        <Accordion.Body>
        Follow these steps to get text from an image:
        <ul>
          <li> Head to <button className="link-button" onClick={Clicklink}>SnapToScript</button> </li>
          <li> Upload or copy/paste your image into the input box.</li>
          <li> Press the submit button.</li>
          <li> Copy the extracted text, or download it as a text file.</li>
        </ul>       

        
       
       
        
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How does our Photo To Text Tools Works?</Accordion.Header>
        <Accordion.Body>
        Photo to text converter is an online tool that convert a photo into text.
         It works by analyzing the pixels of the image and then converting them into words. 
         The technology can be used to convert scanned documents into text or digital formats.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Why Do We Need To Extract Text From Images?</Accordion.Header>
        <Accordion.Body>
        Text extraction from images is crucial for creating accessible, searchable, editable, and shareable versions of the information contained in images. 
        By using an image to text converter, we can easily get text from images and make the information more usable and valuable.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default Questions