import React, {Component} from "react";

class BoardofDirectorsObj extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answers: []
        }
    }

    componentDidMount() {
        this.setState({answers: this.props.answers})
    }

    componentDidUpdate(snapshot, prevProps, prevState) {
        if (prevProps.answers !== this.props.answers) {
            this.setState({answers: this.props.answers})
        }
    }

    render() {
        return (
            <div className={"bod-obj"}>
                <div>
                    <img src={this.props.src} alt={this.props.name}/>
                    <h2>{this.props.name}</h2>
                </div>
                <div>
                {this.state.answers.map((answer, i) => <div key={"questions"+this.props.name+i}>
                    <h4>{this.props.questions[i]}</h4>
                    <p>{answer}</p>
                </div>)}
                </div>
            </div>
        );
    }
}
export default BoardofDirectorsObj;