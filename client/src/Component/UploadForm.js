import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpg', 'image/jpeg']

    const changeHandler = (e) => {
        let selected =e.target.files[0];
        console.log(selected)
        if (selected && types.includes(selected.type)){
            setFile(selected);
            setError('');
        }else{
           setFile(null);
           setError("please select an image file (png, jpg or jpeg)");
        }
    }

    return (
        <form>
            <label>
            <input className="add" type="file" onChange = {changeHandler}/>
            <span>add photos</span>
            </label>
            <div className="output">
                { error && <div className = "error">{ error }</div> }
                { file && <div>{ file.name }</div> }
                { file && <ProgressBar file={file} setFile={setFile} /> }
            </div>
        </form>
    );
}

export default UploadForm;