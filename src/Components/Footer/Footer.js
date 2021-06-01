import React, {Component} from 'react';
import './Footer.css';
import { Link } from "react-router-dom";
class Footer extends Component {
    constructor(props){
        super(props)
        this.state = {
            paths: []
        }
    }
    componentDidMount() {
        if(this.state.paths !== this.props.paths) {
            this.setState({paths: this.props.paths});
        }
    }
    render() {
        return <div className='Footer'> 
        {this.state.paths && this.state.paths.map((path,i)=> <Link to={'/'+path.to}>{path.name}</Link>)} 
        
        </div>
    }
}

export default Footer;