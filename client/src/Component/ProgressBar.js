import React, { useEffect } from 'react';
import useStorage from '../hook/useStorage';
import { motion } from "framer-motion";

const ProgressBar = ({ file, setFile }) => {
    const { url, progress } = useStorage(file);
    
    useEffect(() => {
        if(url){
            setFile(null);
        }
    }, [url, setFile])

    return (
        <div style={{width: "50%"}}>
        <motion.div className="progress-bar"
        initial={{width:0}}
        animate={{width: progress + "%"}}
        ></motion.div>
        </div>
    )
}


export default ProgressBar;