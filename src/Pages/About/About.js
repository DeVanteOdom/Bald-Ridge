import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import backgroundImg from '../../assets/backgrounds/fav_group.jpg'
import { ParallaxBanner } from 'react-scroll-parallax';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            header: "About Us",
            description: "Bald Ridge Lodge, Inc., is a non-profit Stabilization and Assessment Center for boys located in Forsyth County, Georgia which serves boys ages 12-21. We serve those who are in the custody of the Department of Family and Children Services or referred by the local Juvenile Court. Through partnerships with referring agencies, as well as families, we focus on family reunification and restoration. While at the Lodge, boys receive counseling, mentoring, community support and engage in positive activities. With the help of both State and local support, we opened our doors in August of 2008.",
            ourmission: "Our Mission",
            missionstatement: [ "Our mission is to provide a safe haven and counsellin in a theraputic enviorment for boys who are in need of protection, direction, and supervision, in a manner that nurtures the child, strengthens family relationships and allows the community to care for their own."],
            ourvision: "Our Vision",
            vision: "The long-range vision for Bald Ridge is to be the premier residental program for at-risk boys in the state of Georgia. In order to accomplish this, we expertly leverage our community assets to best serve our youth and ensure finacial stability.",
            location: "Where We Are Located",
            address: "505 Lakeland Plaza, #302 Cumming, GA 30040",
            family: "Meet The Family"
        }
    }
    render() {
        return <div className='Aboutpage'> 
        <ParallaxBanner
        style={{objectFit: "cover", minHeight: "100vh"}}
        layers={[{image: backgroundImg, amount: 0.3}]}>
        <div className="parallax-about">
        <h1>{this.state.header}</h1>
        <p>{this.state.description}</p>
        </div>
        </ParallaxBanner> 

         <section className='text'>
             <div className='row'>
             <div className='our-mission'>
                 <h1>{this.state.ourmission}</h1>
                 <p>{this.state.missionstatement}</p>
             </div>

             <div className='our-vision'>
                 <h1>{this.state.ourvision}</h1>
                 <p>{this.state.vision}</p>
             </div>
             </div>
         </section>

        <section className='location'>
            <div className="Location">
                <h1>{this.state.location}</h1>
                <p>{this.state.address}</p>
            </div>
        </section>

        <section className='family'>
            <div className="Family">
                <h1>{this.state.family}</h1>
                <Link to='/boardofdirectors'>Board Of Directors</Link>
                <Link to='/staff'>Staff</Link>
                <Link to='/partners'>Partners</Link>
            </div>
        </section>

      </div>
    }
}

export default About;