import React from 'react';

import Navbar from './Navbar';

function Layout(props){
    return (
        //sirve para no usar divs inecesarios y ponerlos en el dom
        <React.Fragment>
            <Navbar/>
           {props.children} 
        </React.Fragment>
    );
}

export default Layout;