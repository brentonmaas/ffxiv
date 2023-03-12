import React, {Component} from 'react';
import "../../css/core/window.css";

class Window extends Component {

    constructor(props) {
        super(props);

        this.id = 'core';
        this.windowClass = 'core';
        this.name = '';
        this.content = '';
        this.width = '100%';
        this.height = '100%';
        this.noPadding = false;
        this.closeFunction = function(){}.bind(this);

        for(let index in props)
        {
            this[index] = props[index];
        }
    }

    closeWindow() {
        $('#window-'+this.id).fadeOut();
        this.closeFunction();
    }

    getButton(symbol, handler) {
        return (
            <div className="window-core-button" onClick={handler}>
                <i className={symbol}></i>
            </div>
        );
    }

    render() {

        const window_style = {
            width: this.width,
            height: this.height,
        };

        let panel_body_style = {}

        if(this.noPadding)
        {
            panel_body_style = {

                padding: '0px',
            }
        }

        const closeButton = this.getButton("fa-solid fa-xmark button-window-icon", this.closeWindow.bind(this));

        return (
            <div className={'window-' + this.windowClass} id={'window-' + this.id} style={window_style}>
                <div className={'window-' + this.windowClass + '-button-container'}>
                    {closeButton}
                </div>
                <div className={'card h-100 window-' + this.windowClass + '-panel'}>
                    <div className={'card-header window-' + this.windowClass + '-panel-header'}>{this.name}</div>
                    <div className={'card-body window-' + this.windowClass + '-panel-body'} style={panel_body_style}>{this.content}</div>
                </div>
            </div>
        );
    }

}

export default Window;
