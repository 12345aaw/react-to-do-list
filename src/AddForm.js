import React from 'react';

export default class AddForm extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className = "well">
                <form onSubmit={this.props.onSubmit}>
                    <h1>To-Do List</h1>
                    <h4>By Andrew Willis</h4>
                    <div className = "form-group">
                        <label for =  "newBullet">Add new</label>
                        <br/>
                        <input value={this.props.items.term} onChange={this.props.onChange} id="newBullet" />
                    </div>
                    <button className = "btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }

}