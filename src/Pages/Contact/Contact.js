import React, {Component} from 'react';
import "./Contact.css"
import {ParallaxBanner} from "react-scroll-parallax";
import backgroundImg from "../../assets/backgrounds/contact-background.jpg";
class Contact extends Component {
    render() {
        return <div className="contact">
            <ParallaxBanner className={'contact-parallaxing'}
                style={{objectFit: "cover", height: "30vh"}}
                layers={[{image: backgroundImg, amount: 0.5}]}>
                <h1>Contact</h1>
                <p>Have any questions or want to reach out?</p>
            </ParallaxBanner>
            <div className={'contact-description'}>
                <p>Telephone: <span>770-887-1220</span></p>
                <p>Fax: <span>770-887-4161</span></p>
                <p>Mail Us: <span>505 Lakeland Plaza, #302 Cumming, GA 30040</span></p>
            </div>
            <div className={'contact-card'}>
                <p>Write Us!</p>
                <div>
                    <input placeholder={'Name'}/>
                    <input placeholder={'Email'}/>
                </div>
                <div className={'contact-email'}>
                    <input placeholder={'Subject'}/>
                    <textarea placeholder={'Content'}/>
                </div>
                <button>Submit</button>
            </div>
        </div>
    }
}
export default Contact;