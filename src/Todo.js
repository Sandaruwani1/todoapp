function Todo(props){
    return(
        <div>
            <p>
                {props.name}
            </p>
            <button onClick={() => props.deleteTodo(props.id)}>Delete</button>
            <hr />
        </div>
    )

}

export default Todo;