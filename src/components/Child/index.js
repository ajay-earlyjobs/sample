

const Child = (props) => {

    const {msg} = props; 
    console.log(msg)

    return(
        <div>
            <h1>{msg}</h1> 
            <p>Hello</p>
        </div> 
    )

}
export default Child;