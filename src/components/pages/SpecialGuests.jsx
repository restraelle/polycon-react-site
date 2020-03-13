import React from 'react';
import {Link} from 'react-router-dom';

import Page from '../Page';

import ImageSaturn from '../../static/img/saturn.jpg';
import ImageKelly from '../../static/img/specialguests/kellykirstein/kelly1.jpg';
import ImageClod from '../../static/img/specialguests/fortheloveofclod/clod1.jpg';
import ImageBoffin from '../../static/img/specialguests/littleboffin/boffin1.jpg';

import SpecialGuestsItem from '../SpecialGuestsItem';
import SpecialGuestsWrapper from '../SpecialGuestsWrapper';

export default class SpecialGuests extends React.Component {
    constructor(props) {
        super(props);
        this.guests = [
            {
                name: "Kelly Kirstein",
                role: "Cosplay Artist",
                image: ImageKelly,
                description: "Kelly Kirstein is a cosplayer whose experience spans several genres of performance. From representing the United States and placing as a semifinalist at Miss Supranational 2015, working as an internationally published model and appearing in film and television work.",
                headerPosition: "center -50px",
                socials: {
                    facebook: "http://www.facebook.com/kellykirstein",
                    twitter: "http://www.twitter.com/kellykirstein",
                    instagram: "http://www.instagram.com/kellykirstein"
                }
            },
            {
                name: "For the Love of Clod",
                role: "Cosplay Artist",
                image: ImageClod,
                description: "For the Love of Clod is reinventing the “play” in cosplay by producing professional, in-character shows just for anime and pop culture conventions.",
                headerPosition: "center -50px",
                socials: {
                    twitter: "https://twitter.com/loveofclod",
                    instagram: "https://www.instagram.com/for_the_love_of_clod/",
                    facebook: "https://www.facebook.com/fortheloveofclod",
                    youtube: "https://www.youtube.com/channel/UCSJxXuKiPd89AHx1-Whd4ew"
                }
            },
            {
                name: "Little Boffin",
                role: "Cosplay Artist",
                image: ImageBoffin,
                description: "",
                socials: {
                    instagram: "https://www.instagram.com/littleboffin",
                    youtube: "https://www.youtube.com/channel/UCwqM0qBME-1ZIcmfpb3A6uA"
                }
            },
            {
                name: "Saturn",
                role: "Planet",
                image: ImageSaturn,
                description: "It's fucking Saturn you dumb bitch.",
                socials: {}
            },
            {
                name: "Saturn",
                role: "Planet",
                image: ImageSaturn,
                description: "It's fucking Saturn you dumb bitch.",
                socials: {}
            },
            {
                name: "Saturn",
                role: "Planet",
                image: ImageSaturn,
                description: "It's fucking Saturn you dumb bitch.",
                socials: {}
            },
            {
                name: "Saturn",
                role: "Planet",
                image: ImageSaturn,
                description: "It's fucking Saturn you dumb bitch.",
                socials: {}
            },
            {
                name: "Saturn",
                role: "Planet",
                image: ImageSaturn,
                description: "It's fucking Saturn you dumb bitch.",
                socials: {}
            },
        ];
    }
    render() {
        return (
            <div className="special-guests">
                <SpecialGuestsWrapper>
                    {this.guests.map((guest) => {
                        return <SpecialGuestsItem {...guest}/>;
                    })}
                </SpecialGuestsWrapper>
            </div>
        );
    }
}