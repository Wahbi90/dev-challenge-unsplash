import React from 'react';
import useFirestore from '../hook/useFireStore'

const Display = ({ setSelected }) => {
    const { docs } = useFirestore('images');
    console.log(docs)
    return (
        <div className="grid">
            { docs && docs.map(doc => (
                <div className="show" key={doc.id} onClick={() => setSelected(doc.url) }>
                    <img src={doc.url} alt= "image uploaded"/>
                </div>
            ))}
        </div>
    )
}

export default Display;
