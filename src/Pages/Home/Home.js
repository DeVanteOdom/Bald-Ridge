import React, {Component} from 'react';
import './Home.css';
import { ParallaxBanner } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';
import backgroundImg from '../../assets/backgrounds/homepagebackground.jpg'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            header: "Providing A Pathway For Foster Youth In GA",
            description: "The Bald Ridge Lodge is a nurturing, home-like stabilization facility where young men learn the skills they need to be successful in life.  The boys who come and stay at The Lodge leave with the knowledge and confidence they need to excel in life.",
            beliefHeader: "Our Beliefs",
            beliefs: [ "We believe that providing a safe, and nurturing home-like environment is essential to the care and wellbeing of our boys.","We believe that we can change lives.", "We believe in the power of bringing the resources of the community together.", "We believe it is a privilege to work with, and on behalf of, our youth. "]
        }
    }
    render() {
        return <div className='Homepage'>
                <ParallaxBanner
                style={{objectFit: "cover", minHeight: "100vh"}}
                layers={[{image: backgroundImg, amount: 0.3}]}>
                    <div className="parallax-header">
                        <h1>{this.state.header}</h1>
                        <Link to='/about'>Learn More</Link>
                        <a href="https://baldridgelodge.networkforgood.com/projects/74020-bald-ridge-lodge-annual">Donate</a>
                    </div>
                </ParallaxBanner> 
                <section>
                    <div className='home-description'> 
                        <iframe src="https://player.vimeo.com/video/366591890" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                        <p>{this.state.description}</p>
                    </div>
                    <div className='home-beliefs'>
                        <h2>{this.state.beliefHeader}</h2>
                        <ul>{this.state.beliefs.map((txt,i) => <li key={"belief"+i}>{txt}</li>)}</ul>
                    </div>
                </section>
            </div>
    }
}

export default Home;