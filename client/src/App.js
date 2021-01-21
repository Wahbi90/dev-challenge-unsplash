import React, { useState } from "react";
import Title from "./Component/Title"
import UploadForm from "./Component/UploadForm";
import Display from "./Component/Display";
import Large from "./Component/Large";

function App () {

    const [selected, setSelected] = useState(null);

    return (
        <div>
            <Title/>
            <UploadForm />
            <Display setSelected={setSelected} />
            <Large selected={selected} />
        </div>
    );
}

export default App;