import React from "react";
import useFirestore from '../hook/useFireStore';
import SRLWrapper from "simple-react-lightbox";


const Display = ({ setSelected , term}) => {
    const { docs } = useFirestore('images');
    
    console.log(docs)
    return (
        <SRLWrapper>
        <div className="grid">
            { docs.filter((doc) => {
                if (term === ""){
                    return doc
                }else if (doc.url.toLowerCase().includes(term.toLowerCase())){
                    return doc.url.toLowerCase().includes(term())
                }
                return "not availble"
            }).map(doc => ( 
                <div className="show" key={doc.id} 
                onClick={() => setSelected(doc.url) }>
                    
                    <img src={doc.url} alt= "uploaded" />
                    
                </div>
            ))}
        </div>
        </SRLWrapper>
    )
}

export default Display;
