import React from 'react';

export default class ContactItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: this.props.children
        };
    }
    render() {
        return (
            <div className="contact-item">
                <div style={{backgroundImage: "url('" + this.props.image + "')"}} alt="" className="contact-item__image">
                    <div className="contact-item__arrow"></div>
                </div>
                <div className="contact-item__info">
                    <h4>{this.props.name}</h4>
                    <p><b>{this.props.position}</b></p>
                    <a href={"mailto:" + this.props.email}>{this.props.email}</a>
                    {/* <p>Vincent Hael has been a core team member since FLPolyCon 2016 and handles the adminstration decisions regarding FLPolyCon and also helps assist the other departments. Often spotted watching Anime and believes the gacha is bad civilization.</p> */}
                </div>
            </div>
        );
    }
}