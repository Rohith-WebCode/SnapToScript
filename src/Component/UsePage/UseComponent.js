import React ,{useEffect}from 'react'
import './UseComponent.css'
import { useLocation } from 'react-router-dom';

function UseComponent() {
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
    <div id='top'>
        <h2 className='head2'>How does the SnapToScript work?</h2>
        <p className='Text'>Based on OCR technology, the SnapToScript tool is developed with advanced libraries and text recognition models.
          Different patterns of characters are classified into different prototypes. Commonly, an Image OCR tool performs the following functions: </p>
<ul className='ultext'>
    <li>First, our tool scans and extract text from the Image.</li>
    <li> Then it does location segmentation and arranges text according to the image.</li>
    <li>After the text is fully extracted, our tool performs very light grammar corrections to make it more accurate.</li>
</ul>
        
      
      
    </div>
  )
}

export default UseComponent