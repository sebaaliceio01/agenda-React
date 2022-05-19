import React from "react";

export const TaskBanner = (props) => (
    <h4 className="bg-primary text-white tex-center p-4">
       {props.userName}'s TaskApp ({props.taskItems.filter((result) => !result.done).length} to do)
    </h4>
)