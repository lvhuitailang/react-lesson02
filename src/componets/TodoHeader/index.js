import React from "react";

import PropTypes from 'prop-types'

const TodoHeader = (props)=>{
    return(
        <div>
            <h1>{props.title}</h1>
            <h3>{props.children}</h3>
        </div>

    )
}
TodoHeader.propTypes={
    title:PropTypes.string
}

export default TodoHeader;