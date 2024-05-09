import React from "react";

function Posts(props) {
    const {title, description} = props
    return (
        <div>
            <p>{description}</p>
            <h3>{title}</h3>
        </div>
    )
}
export default Posts