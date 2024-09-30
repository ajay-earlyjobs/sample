
import { useState } from "react";
import CA from '../CA'

const PA = () => {

    const [value,setValue] = useState("This should be changed by child component"); 

    const onChange = (newValue) => {
        setValue(newValue)
    }

    const onOriginal = () => {
        setValue("This should be changed by child component")
    }

    return(
        <div>
            <div>
                <h1>This is parent Component</h1> 
                <p>{value}</p> 
                <button onClick={onOriginal}>Change to original</button>
                <CA onChange={onChange}/> 

            </div>
        </div>
    )
}

export default PA;