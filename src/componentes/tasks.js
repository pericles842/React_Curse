import React,{Component} from "react";

class Tasks extends Component{
    render(){
        return(
            this.state.props.map(e => <p key={e.id}>
                {e.id}- {e.title} - {e.done} - {e.description}
         </p>)
        );
    }
}

export default Tasks;