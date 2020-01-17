import React from 'react';

export default class Advisory extends React.Component {
    render() {
        return (
            <div className="advisory full-width">
                <i class={this.props.iconClass}></i>
                <p>{this.props.message}</p>
            </div>
        );
    }
}