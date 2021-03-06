import streams from "../apis/streams";
import history from "../history";
import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS,
    EDIT_STREAM,
    DELETE_STREAM
} from "./types";

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
    return async ( dispatch, getState)=>{
        const {userId}=getState().auth;
       const response=await streams.post('/streams', {...formValues, userId}); //creating a handle for the newly created stream
                                                                  //so that we can handle the action dispatched.
    dispatch({type:CREATE_STREAM, payload: response.data});
     history.push('/');                                                            //dispatching the action object with the payload
    };                                                           //recived from axios response.
};
export const fetchStreams=()=> async dispatch=>{
    const response=await streams.get('/streams');
    dispatch({type:FETCH_STREAMS, payload:response.data});
};

export const fetchStream=(id)=>async dispatch=>{
    const response=await streams.get(`/streams/${id}`);
    dispatch({type:FETCH_STREAM, payload:response.data});
};

export const editStream=(id, formValues)=>async dispatch=>{
    const response=await streams.patch(`/streams/${id}`, formValues);
    dispatch({type:EDIT_STREAM, payload:response.data});
    history.push('/');
};

export const deleteStream=(id)=>async dispatch=>{
    const response=await streams.delete(`streams/${id}`);
    dispatch({type:DELETE_STREAM, payload:id});
    history.push('/');
};




