import React from 'react'

import './styles/PageCenter.css'

function PageError(props) {
    return <div className="PageCenter">{props.error.message}</div>
}

export default PageError;