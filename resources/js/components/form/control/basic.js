import React, {Component} from 'react';

class Form_Control_Basic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            value: '',
            label: '',
            additional: '',
        };

        for(let index in props)
        {
            this.state[index] = props[index];
        }
    }

    handleChange() {

    }

    render() {
        return (
            <label className="form-control-basic">
                <div className="form-control-label">{this.state.label+':'}</div>
                <input type="text" name={this.state.id} id={this.state.id} className="form-control-input" defaultValue={this.state.value} />
                <div className="form-control-additional">{this.state.additional}</div>

                <div className="form-padding-row"></div>
            </label>
        );
    }

}

export default Form_Control_Basic;
