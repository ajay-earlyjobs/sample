
import Child from '../Child' 

const Parent = (props) => {
    const {onChange} = props

    const msg = "Hello This is parent component"

    return(
        <div>
            <h1>Parent</h1> 
            {
                <Child msg={msg}/>
            }
        </div>
    )

}

export default Parent;