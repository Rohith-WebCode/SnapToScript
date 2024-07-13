import React ,{useState} from "react";
import {useDropzone} from 'react-dropzone';
import Image from '../Img/img.png'
const UploadComponent =({onImageUplode})=>{
    const [file,setFile] = useState(null)
    const {getRootProps,getInputProps}= useDropzone({
        accept:'image/*',
        onDrop:acceptedFiles=>{
            const file = acceptedFiles[0];
            setFile(file);
            onImageUplode(file);
        }
    });

    return(
        <div className="tool">
        <div {...getRootProps()} className="upload-container ">
            <img src={Image} className="gallery-IMG"></img>

            <h1 {...getInputProps} />
            {file ? <p>{file.name}</p> : <p>Drag & Drop a Image here, or click to select one</p>}
           
             
        </div>
        <p className="tool-text">*Your privacy is protected! No data is transmitted or stored.</p>
        </div>
    )
}

export default UploadComponent;