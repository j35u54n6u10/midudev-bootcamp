const Result = (props) =>{
    console.log(props)

    return (
        <h1 style={{ color: props.color }}>
            {props.messages}
        </h1>
    )
}

export default Result 