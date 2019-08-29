import React from 'react';
import Modal from "../Modal";
import history from "../../history";

const StreamDelete=()=>{
    const actions=(
       <div>
           <button className={`ui button negative`}>Delete</button>
            <button className={`ui button`}>Cancel</button>
       </div>
    );
    return(
        <div>
            StreamDelete
            <Modal
                title={`Delete Stream`}
                content={`Are you sure, you want to Delete this stream?`}
                onDismiss={()=>history.push('/')}
                actions={actions}

            />
        </div>
    );
};

export default StreamDelete;

