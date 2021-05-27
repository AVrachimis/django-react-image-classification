import React, { Component } from 'react';

const API = 'https://swapi.dev/api/people/'


class StarWars extends Component {
    state = {
        people: []
    }
    componentDidMount() {
        this.fetchStarWars()
    }

    fetchStarWars = () => {
        fetch(API)
            .then(resp => resp.json())
            .then(data => this.setState({ people: data.results }))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <ul>
                {this.state.people && this.state.people.map(ch => <li key={ch.name}>{ch.name}</li>)}
            </ul>
        );
    }
}

export default StarWars;