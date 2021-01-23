import React, { useState } from "react";
import Title from "./Component/Title"
import UploadForm from "./Component/UploadForm";
import Display from "./Component/Display";
import Large from "./Component/Large";
import Search from "./Component/Search";


function App () {

    const [selected, setSelected] = useState(null);
    const [term, setTerm] = useState("");

    return (
        <div>
            <Title/>
            <Search setTerm={setTerm} />
            <UploadForm />
            <Display setSelected={setSelected} term={term} />
            { selected && <Large selected={selected} setSelected={setSelected}  /> }
        </div>
    );
}

export default App;