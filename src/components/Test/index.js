
import { useState,useEffect } from "react";

const Test = () => {

    const [value,setValue] = useState("Ajay Medidhi");  

    


    return(
        <div>
            <h1>Test</h1> 
            <p>{value}</p> 

            <button >Click Me</button>
        </div>
    )
}

export default Test;