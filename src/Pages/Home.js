import React,{useState} from 'react';
import '../App.css';
import UploadComponent from  '.././Component/UploadComponent';
import OCRComponent from '.././Component/OCRComponent';
import Navbar  from '../Navbar/NavBar'
import CardComponent from '.././Component/Card/Card';
import UseComponent from '.././Component/UsePage/UseComponent';
import Questions from '.././Component/Questions/Questions';
import Footer from '../Footer/footer';

function Home() {
const [imageFile,setimageFile] = useState(null)

  return (
    <div className="App">
      <Navbar/>
      <div className='ContainerHead'> <h1 className='head'>SnapToScript</h1></div>
      
       <p>An online image to text converter to extract text from images. Upload your photo, to get text file instantly.</p>
     <UploadComponent onImageUplode={setimageFile}/>
     {imageFile && <OCRComponent imageFile={imageFile}/>}
     <CardComponent/>
     <UseComponent/>
     <h2 className='FAQs'>FAQs</h2>
     <Questions/>
     <Footer/>
      </div>
  );
}

export default Home;