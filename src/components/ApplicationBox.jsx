import React from 'react';
import {Link} from 'react-router-dom';

export default class ApplicationBox extends React.Component {
    render() {
        return (
            <a className="application-box" target="_blank" rel="noreferrer noopener" style={{color: this.props.color, borderColor: this.props.color}} href={this.props.link}>
                
                <i class={this.props.iconClass}></i>
                <p className="application-box__title">{this.props.title}</p>
                <p className="application-box__subtitle">{this.props.description}</p>
            </a>
        );
    }
}