import React from 'react';
import { Field, reduxForm } from 'redux-form';


class StreamForm extends React.Component{

    renderError({touched, error}){            //destructuring touched and error properties from meta object
        if(touched && error){
            return(
                <div className={`ui error message`}>
                    <div className={`header`}>{error}</div>
                </div>
            );
        }
    }
    renderInput=({input, label, meta})=>{
        const className=`field ${meta.error && meta.touched ? 'error':''}`;
        return(
            <div className={className}>
                <label>{label}</label>
                <input {...input}  autoComplete={`off`}/>
                {this.renderError(meta)}
            </div>                                  //here as renderInput() is getting passed to some other
        )};                                         //component the value of this inside renderInput() will
                                                    //be undefined.so to prevent error we gotta bind renderInput()
                                                    //using an arrow function.


    //Now when the user fills the form and submits it...After all the above validations the onSubmit() function
    // will call our createStream() action creator with the formValues entered by the user.
    //As our Action creator runs we are gonna make a post request to our api server & this is gonna make a new stream
    //as we are following restFull conventions as we are making a post request to '/streams'.


    onSubmit=(formValues)=>{

        this.props.onSubmit(formValues);
    };
    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className={`ui form error`}>
                <Field name={`title`} component={this.renderInput} label={`Enter Title`} />
                <Field name={`description`} component={this.renderInput} label={`Enter Description`} />
                <button className={`ui button primary`}>Submit</button>
            </form>
        )
    }
}
const validate=(formValues)=>{
    const errors={};
    if(!formValues.title){
        errors.title='You must enter a valid Title';
    }
    if(!formValues.description){
        errors.description='You must enter a valid Description'
    }
    return errors;
};

export default reduxForm({
    form: 'streamForm',
    validate
})(StreamForm);


