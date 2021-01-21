import React from 'react';
import { motion } from "framer-motion";

const Large = ({ selected, setSelected }) => {

    const hundleClick = (e) => {
        if(e.target.classList.contains("large")){
        setSelected(null);
    }
    }

    return (
        <motion.div className="large" onClick={hundleClick}
        initial={{opacity:0}}
        animate={{opacity:1}}
        >
            <img src={ selected } alt="large pic" />
        </motion.div>
    )
}

export default Large;