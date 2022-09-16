import React, {Component} from 'react';

class Form_Basic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
        };

        for(let index in props)
        {
            this.state[index] = props[index];
        }
    }

    handleSubmit() {

    }

    handleChange() {

    }

    render() {
        return (
            <form id={this.state.id} onSubmit={this.handleSubmit}>
                <input type="submit" value="Submit" />
            </form>
        );
    }

}

export default Form_Basic;
