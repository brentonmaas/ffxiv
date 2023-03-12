import React, {Component} from 'react';

class Page extends Component {

    constructor(props) {
        super(props);

        this.pageClass = 'core';

        for(let index in props)
        {
            this[index] = props[index];
        }
    }

    getContent() {

        return(
            <div></div>
        );
    }

    render() {

        this.content = this.getContent();

        return (
            <div className={'container-fluid h-100 page-' + this.pageClass}>
                {this.content}
            </div>
        );
    }
}

export default Page;

