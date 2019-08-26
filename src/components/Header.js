import React from 'react';
import  { BrowserRouter, Link }  from "react-router-dom";  //instead of using BrowserRouter we here use a plain Router as we
                                                    //are maintaining a custom history object and so there is no need of
                                                    //the ReactBrowser to create the history object.
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
