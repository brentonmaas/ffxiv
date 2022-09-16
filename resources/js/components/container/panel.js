import React, {Component} from 'react';

class Container_Panel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            body: ''
        };

        for(let index in props)
        {
            this.state[index] = props[index];
        }
    }

    render() {
        return (
            <div className="card h-100">
                <div className="card-header panel-header">{this.state.name}</div>
                <div className="card-body panel-body">{this.state.body}</div>
            </div>
        );
    }

}

export default Container_Panel;
