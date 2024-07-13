import React, {useState} from "react";
import Tesseract from 'tesseract.js';
import Button from 'react-bootstrap/Button';
// import {createWorker} from 'tesseract.js'


const OCRComponent = ({imageFile})=>{
    const [text,setText] = useState('');
    const [loaing, setLoading] = useState(false)
    // const Worker =createWorker();

    const handleOCR= async()=>{
        setLoading(true);
        // await (await Worker).load()
        // await (await Worker).reinitialize("eng")
        // const {data} =await (await Worker).recognize(imageFile)
        // console.log(data.text);
        Tesseract.recognize(
            imageFile,
            'eng',
            {
                
            }
        ).then (({data : {text}})=>{
            setText(text);
            setLoading(false);
        })
    }

    return(
        <div className="Read ">
            <Button className="buttonInread" variant="primary" size="lg" onClick={!loaing ? handleOCR :null} disabled = {loaing}  >
                {loaing ? 'Processing...' : 'Submit'}
            </Button>
            {text && <div className="text-output"><pre>{text}</pre></div>}

        </div>
    )
}

export default OCRComponent