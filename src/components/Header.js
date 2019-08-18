import React from 'react';
import  { BrowserRouter, Link }  from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header=()=>{
    return (
        <div className={`ui secondary pointing menu`}>
            <BrowserRouter>
                <Link to={`/`} className={`item`}>
                    Streamy
                </Link>
                <div className={`right menu`}>
                    <Link to={`/`} className={`item`}>
                        All Streams
                    </Link>
                    <GoogleAuth />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default Header;
