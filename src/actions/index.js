import streams from "../apis/streams";
import { SIGN_IN, SIGN_OUT, CREATE_STREAM} from "./types";

export const signIn=(userId)=>{                  //actionCreator()
    return{
        type:SIGN_IN,
        payload:userId
    }
};
export const signOut=()=>{                       //actionCreator()
    return {
        type:SIGN_OUT
    }
};
export const createStream=(formValues)=>{        //actionCreator()
    return async ( dispatch)=>{
       const response=await streams.post('/streams', formValues)  //creating a handle for the newly created stream
                                                                  //so that we can handle the action dispatched.
    dispatch({type:CREATE_STREAM, payload: response.data});       //dispatching the action object with the payload
    };                                                           //recived from axios response.

};

