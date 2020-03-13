import React from 'react';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';

import ImageCon1 from '../static/img/hero-1.jpg';
import ImageCon2 from '../static/img/hero-2.jpg';
import ImageCon3 from '../static/img/hero-3.jpg';
import ImageCon4 from '../static/img/hero-4.jpg';

import ImageEmblem from '../static/img/tek-emblem-white-web.png';

export default class HeroSlider extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 800,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: false,
            arrows: false,
            dots: false
        }
        return (
            <div className="hero-slider">
                <div className="hero-slider-background"></div>
                <div className="hero-slider-static-box">
                    <img src={ImageEmblem} alt=""/>
                    <h3>Saturday, April 4th, 2020</h3>
                    <h5>Get your tickets now!</h5>
                    <Link to="/tickets" className="button">Buy Tickets</Link>
                </div>
                <Slider style={{zIndex: "-1"}} {...settings}>
                    <div className="hero-slider-slide">
                        <div className="hero-slider-content" style={{backgroundImage: "url(" + ImageCon1 + ")"}}>
                        </div>
                    </div>
                    <div className="hero-slider-slide">
                        <div className="hero-slider-content" style={{backgroundImage: "url(" + ImageCon2 + ")"}}>
                        </div>
                    </div>
                    <div className="hero-slider-slide">
                        <div className="hero-slider-content" style={{backgroundImage: "url(" + ImageCon3 + ")"}}>
                        </div>
                    </div>
                    <div className="hero-slider-slide">
                        <div className="hero-slider-content" style={{backgroundImage: "url(" + ImageCon4 + ")"}}>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}