import React from 'react';
import { Link } from 'react-router-dom';

import "./styles/NotFound.css"
function NotFound(){
    return (
        <div className="Home">
            <div className="container">
                <div className="ErrorFound">
                <h1>404: Not Found</h1>
                <h3>Regresa a la Pagina Principal <Link to="/">Home</Link></h3>
                </div>
            </div>
        </div>
            

    )
}

export default NotFound;