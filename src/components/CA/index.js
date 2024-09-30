
const CA = (props) => {
    const {onChange} = props
    const onChild = () => {
        onChange("Ajay Medidhi")
    }

    return(
        <div>
            <h1>This is child component</h1> 

            <button onClick={onChild}>Change the parent component</button>
        </div>
    )
}

export default CA;