import React from 'react';
import Modal from "../Modal";
import history from "../../history";
import { fetchStream } from "../../actions";
import { connect } from "react-redux";

class StreamDelete extends React.Component{
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }
    renderContent(){
        if(!this.props.stream){
            return `Are you sure you want to Delete this Stream?`
        }
        return `Are you sure You want to Delete the stream with title :  ${this.props.stream.title}`
    };
    renderActions(){
        return (
            <React.Fragment>
                <button className={`ui button negative`}>Delete</button>
                <button className={`ui button`}>Cancel</button>
            </React.Fragment>
        );
    }
    render() {
        return(


                <Modal
                    title={`Delete Stream`}
                    content={this.renderContent()}
                    onDismiss={()=>history.push('/')}
                    actions={this.renderActions()}

                />

        );
    }


}

const mapStateToProps=(state, ownProps)=>{
    return {
        stream:state.streams[ownProps.match.params.id]
    }
};
export default connect(mapStateToProps, {fetchStream})(StreamDelete);

