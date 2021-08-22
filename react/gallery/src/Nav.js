import React from 'react'
import { Link } from "react-router-dom";


function Nav(props) {
    return (
        <div className="nav">
            <div id="leftSideNavDiv">
                <Link to="/register" className="myLink"> LOGO </Link>
            </div>
            <div id="middleNavDiv">
                <Link to="/" className="myLink"> Gallery </Link>
                <Link to="/contactus" className="myLink"> Contact Us </Link>
                <Link to="/register" className="myLink"> Register </Link>
            </div>
            <div id="rightSideNavDiv">
                <Link to="/register" className="myLink"> Register </Link>
            </div>
        </div>
    )
}


export default Nav



