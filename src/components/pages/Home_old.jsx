import React from 'react';
import {Link} from 'react-router-dom';

import Template from '../Template';

import ImageCallout1 from '../../static/img/callout-1.jpg';
import ImageCallout2 from '../../static/img/callout-2.jpg';
import ImageCallout3 from '../../static/img/callout-3.jpg';
import ImageCallout4 from '../../static/img/callout-4.jpg';

import NavigationItem from '../NavigationItem';
import PostThumbnail from '../PostThumbnail';
import HeroSlider from '../HeroSlider';

export default class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <HeroSlider>

                </HeroSlider>
                
                <div class="section">
                    <div class="content">
                        {/* <h4 class="text-center"></h4> */}
                        <PostThumbnail image={ImageCallout1} title="Food Trucks">
                        
                        <p>This is not the typical food sold at conventions. You can expect fun, international lunch options such as Hawaiian, Mexican, FIlipino, American, Thai, Venezuelan, and Mediterranean. Come enjoy this refreshing twist on convention food.</p>
                        </PostThumbnail>
                        <PostThumbnail image={ImageCallout3} title="Merchant Guild">
                        <p>Stock up on cool, unique items and handmade creations including props, specialty snacks, figures, 	cosplay apparel, art prints, plushies, jewelry, games, crafts, and more.</p>
                        </PostThumbnail>
                        <PostThumbnail image={ImageCallout2} title="Arcade Room">
                            <p>Check out our several game rooms such as our Fighting Game Room, Rhythm Game Room, the classic and vintage games in our Arcade Machine Room, and our plentiful collection of board games in the Tabletop Game Room.</p>
                        </PostThumbnail>
                        <PostThumbnail image={ImageCallout4} title="After Party">
                            <p>You know what's cooler than glowsticks? LED light sticks and flashing sunglasses! Enjoy free food and drinks, swing around free LED swag, and jam to geeky music mixes by famous artists.</p>
                        </PostThumbnail>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="section text-center">
                    <h3>More info coming soon!</h3>
                </div>
            </React.Fragment>
        );
    }
}