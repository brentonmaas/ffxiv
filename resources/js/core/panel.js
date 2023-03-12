import React, {Component} from 'react';

class Panel extends Component {

    constructor(props) {
        super(props);

        this.id = '';
        this.name = '';
        this.body = '';

        for(let index in props)
        {
            this[index] = props[index];
        }
    }

    render() {
        return (
            <div className="card h-100">
                <div className="card-header panel-header">{this.name}</div>
                <div className="card-body panel-body">{this.body}</div>
            </div>
        );
    }

}

export default Panel;
