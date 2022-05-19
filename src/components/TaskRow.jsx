import React from "react";

export const TaskRow = (props) => (

    <tr key={props.task}>
        <td>{props.task}</td>
        <td>
            <input type="checkbox" checked={props.done} onChange={() => props.toggleTask(props.task)} />
        </td>
    </tr>
)

export default TaskRow