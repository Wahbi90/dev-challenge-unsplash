import React, { useEffect } from 'react';
import useStorage from '../hook/useStorage';

const ProgressBar = ({ file, setFile }) => {
    const { url, progress } = useStorage(file);
    
    useEffect(() => {
        if(url){
            setFile(null);
        }
    }, [url, setFile])

    return (
        <div style={{width: "50%"}}>
        <div className="progress-bar" style={{width: progress + "%"}}></div>
        </div>
    )
}


export default ProgressBar;