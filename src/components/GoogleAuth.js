import React from 'react';
import { connect } from 'react-redux';
import {signIn, signOut} from "../actions";

class GoogleAuth extends React.Component{

    componentDidMount() {
        window.gapi.load('client:auth2',()=>{       //this callBack function is only called when gapi has successfully and completely loaded.
             window.gapi.client.init({              //makes an asynchronous request over to google's API server in order ti initialize our client.
                clientId:'361599037691-f390mjplq1e8eeh4qr4qbaakhnu17pre.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                this.auth=window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
                 }
             );
        });
    }
    onAuthChange=(isSignedIn)=>{
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }else {this.props.signOut();}
    };

    onSignInClick=()=>{
        this.auth.signIn();
    };
    onSignOutClick=()=>{
        this.auth.signOut();
    };
    renderAuthButton(){
        if(this.props.isSignedIn===null){
            return (
                <div className="ui  active centered tiny inline loader"></div>
            );
        }else  if(this.props.isSignedIn){
            return (
                <button onClick={this.onSignOutClick} className="ui mini red google button">
                    <i className="google  icon"></i>
                   Sign Out
                </button>
            )
        }else {
            return(
                <button onClick={this.onSignInClick} className="ui mini green google  button">
                    <i className="google  icon"></i>
                   Sign In
                </button>
            )
        }
    }

    render() {
        return(
            <div>
               {this.renderAuthButton()}
            </div>
        );
    };
}
const mapStateToProps=(state)=>{
    return {isSignedIn:state.auth.isSignedIn}
};
export default (connect(mapStateToProps,
    {signIn,signOut}
    ))(GoogleAuth);
