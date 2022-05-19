import React, { useState } from "react";

export const TaskCreator = (props) => {

    const updateNewTaskValue = (result) => (
        setText(result.target.value)
    )

    const [text, setText] = useState('')

    const createNewTask = () => {
        if (text != '') {
            props.createTask(text)
            setText('')
        }
    }

    return (
        <div className="my-1">
            <input type="text" className="form-control" value={text} onChange={updateNewTaskValue} />
            <button className="btn btn-primary mt-1" onClick={() => createNewTask()}>Crear</button>
        </div>
    )
}