import React from 'react';

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
           <div >
               <p>{this.props.joke}</p>
               <p>{this.props.score}</p>
               <i  onClick={this.handleUpVote} className="fa fa-thumbs-up" aria-hidden="true"></i>
               <i  onClick={this.handleDownVote} className="fa fa-thumbs-down" aria-hidden="true"></i>
           </div>
       )
   }
}

export default Joke;

