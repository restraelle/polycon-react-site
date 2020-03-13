import React, { Component } from 'react';

import SpecialGuestItem from './SpecialGuestsItem';

class SpecialGuestsWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPopupOpen: false,
            currentGuest: -1
        };
    }
    componentDidMount() {
        var index = 0;
        var guests = {};
        React.Children.forEach(this.props.children, (child) => {
            guests[index] = child.props;
            index++;
        });
        this.setState((state, props) => {
            return {
                ...state,
                guests: guests
            };
        });
    }
    renderItems() {
        var components = [];
        var index = 0;
        React.Children.forEach(this.props.children, (child) => {
            const currentIndex = index;
            components.push(
                <SpecialGuestItem {...child.props} key={index} onClick={() => this.handleItemClick(currentIndex)}/>
            );
            index++;
        });
        return components;
    }
    handleItemClick(index) {
        this.setState({
            isPopupOpen: true,
            currentGuest: index
        });
    }
    handleClose() {
        this.setState((state, props) => {
            return {
                ...state,
                isPopupOpen: false,
                currentGuest: -1
            }
        });
    }
    renderPopup() {
        if(this.state.isPopupOpen) {
            var guest = this.state.guests[this.state.currentGuest];
            return (
                <React.Fragment>
                    <div className="special-guests__popup">
                        <div className="popup__close" onClick={() => this.handleClose()}>
                            <i class="fas fa-times"></i>
                        </div>
                        <div className="popup__header" style={{backgroundImage: "url(" + guest.image + ")", backgroundPosition: guest.headerPosition ? guest.headerPosition : null}}>
                            
                        </div>
                        <div className="popup__content">
                            <div className="popup__socials">
                                {guest.socials.facebook ? <a className="socials__item" href={guest.socials.facebook} rel="nofollow noopener" target="_blank"><i class="fab fa-facebook-square"></i></a> : null}
                                {guest.socials.twitter ? <a className="socials__item" href={guest.socials.twitter} rel="nofollow noopener" target="_blank"><i class="fab fa-twitter-square"></i></a> : null}
                                {guest.socials.instagram ? <a className="socials__item" href={guest.socials.facebook} rel="nofollow noopener" target="_blank"><i class="fab fa-instagram-square"></i></a> : null}
                                {guest.socials.youtube ? <a className="socials__item" href={guest.socials.youtube} rel="nofollow noopener" target="_blank"><i class="fab fa-youtube-square"></i></a> : null}
                                {guest.socials.site ? <a className="socials__item" href={guest.socials.site} rel="nofollow noopener" target="_blank"><i class="fas fa-external-link-square-alt"></i></a> : null}
                            </div>
                            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px"}}>
                                <h2>{guest.name}</h2>
                                <h6>{guest.role}</h6>
                            </div>
                            <div>
                                <p>{guest.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="special-guests__popup__background" onClick={() => this.handleClose()}></div>
                </React.Fragment>
            );
        }
    }
    render() { 
        return (
            <React.Fragment>
            {this.renderPopup()}
            <div className="special-guests__content">
                {/* <div className="special-guests__scroll-wrapper"> */}
                    {this.renderItems()}
                {/* </div> */}
            </div>
            </React.Fragment>
        );
    }
}
 
export default SpecialGuestsWrapper;