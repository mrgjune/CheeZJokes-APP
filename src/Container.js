import React from 'react';
import Joke from "./Joke"
import axios from 'axios';


class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            jokes: [],
            loading: true
        }
        this.upVoteJoke = this.upVoteJoke.bind(this);
        this.downVoteJoke = this.downVoteJoke.bind(this);
    }

    
    async componentDidMount() {
        let jokeArr = [];
        for (let i = 0; i < 10; i++){
            jokeArr.push(await this.getJoke());
        }

        let jokeInfoArr = jokeArr.reduce(function(outputArr, jokeObj){
            return outputArr.concat(jokeObj);
        },[])

        this.setState({
            jokes: jokeInfoArr,
            loading: false
        })
    }

    async getJoke() {
        let response = await axios.get('https://icanhazdadjoke.com/', {
            headers: {
                Accept: "application/json",
            }
        })

        let jokeObj = {
            text: response.data.joke,
            id: response.data.id,
            score: 0
        }

        return jokeObj;
    }


    upVoteJoke(id){
        this.setState(st => ({
            jokes: st.jokes.map(function(joke){
                let update = joke.id === id
                    ? { ...joke, score: joke.score+1 }
                    : joke
                return update;
            })
        }))
    }
    
    
    downVoteJoke(id){
        this.setState(st => ({
            jokes: st.jokes.map(function(joke){
                let update = joke.id === id
                    ? { ...joke, score: joke.score-1 }
                    : joke
                return update;
            })
        }))
    }


    render() {
       let orderedJokes = this.state.jokes.sort((a,b) => (a.score < b.score) ? 1 : -1)
       let jokes = orderedJokes.map(joke => <Joke 
                                                key={joke.id} 
                                                id={joke.id} 
                                                joke={joke.text} 
                                                score={joke.score}
                                                upVote={this.upVoteJoke} 
                                                downVote={this.downVoteJoke}/>)

        const body = this.state.loading
            ? <p>Loading</p>
            : <div>{jokes}</div>
        return (
            <div>
               {body}
            </div>
        )

    }
}

export default Container;

