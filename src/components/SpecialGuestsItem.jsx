import React, { Component } from 'react';

class SpecialGuestsItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }
    handleClick() {
        this.props.onClick();
    }
    render() { 
        return (
            <div className="special-guests__scroll-item" onClick={() => this.handleClick()}>
                <div className="special-guests__scroll-item__info">
                    <p class="name">{this.props.name ? this.props.name : "No Name"}</p>
                    <p class="role">{this.props.role ? this.props.role : "No Role"}</p>
                </div>
                <div className="special-guests__scroll-item__image" style={{backgroundImage: "url(" + this.props.image + ")"}}></div>
            </div>
        );
    }
}
 
export default SpecialGuestsItem;