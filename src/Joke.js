import React from 'react';
import "./Joke.css"
class Joke extends React.Component {
    constructor(props) {
        super(props)
        this.handleUpVote = this.handleUpVote.bind(this);
        this.handleDownVote = this.handleDownVote.bind(this);
    }

    handleUpVote () {
        this.props.upVote(this.props.id);
    }

    handleDownVote() {
        this.props.downVote(this.props.id);
    }

   render() {
       return (
            <div className="container mt-4">
                <div className="row">
                    <div className="Joke-votearea">
                        <i onClick={this.handleUpVote} className="fa fa-thumbs-up" aria-hidden="true"></i>
                        <i onClick={this.handleDownVote} className="fa fa-thumbs-down" aria-hidden="true"></i>
                        <span>{this.props.score}</span>
                    </div>
                    <div className="col-10">
                        <p>{this.props.joke}</p>
                    </div>
               </div>
           </div>
       )
   }
}

export default Joke;

