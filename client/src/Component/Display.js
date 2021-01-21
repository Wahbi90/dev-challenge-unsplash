import React from 'react';
import useFirestore from '../hook/useFireStore'
import { motion } from "framer-motion";

const Display = ({ setSelected }) => {
    const { docs } = useFirestore('images');
    console.log(docs)
    return (
        <div className="grid">
            { docs && docs.map(doc => (
                <motion.div className="show" key={doc.id} 
                layout
                whileHover={{opacity:1}}
                onClick={() => setSelected(doc.url) }>
                    <motion.img src={doc.url} alt= "image uploaded"
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{delay:1}}
                    />
                </motion.div>
            ))}
        </div>
    )
}

export default Display;
