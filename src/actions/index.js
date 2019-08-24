import streams from "../apis/streams";
import { SIGN_IN, SIGN_OUT} from "./types";

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
        streams.post('/streams', formValues)
    };
};

