import React, { Component } from 'react';
import Table from './Table';


// Render class component Table
class App extends Component {
    // Adding state object
    state = {
        characters: [
            {
            name: 'Charlie',
            job: 'Janitor',
            },
            {
            name: 'Mac',
            job: 'Bouncer',
            },
            {
            name: 'Dee',
            job: 'Aspring actress',
            },
            {
            name: 'Dennis',
            job: 'Bartender',
            },
        ]
    }

    // Method to update state
    removeCharacter = (index) => {
        const { characters } = this.state

        this.setState({
            characters: characters.filter((chracter, i) => {
                return i !== index
            }),
        })
    }

    render() {
        // Pretend return array from a JSON based API
        // Defines properties for Table component
        // const characters = [
        //     {
        //     name: 'Charlie',
        //     job: 'Janitor',
        //     },
        //     {
        //     name: 'Mac',
        //     job: 'Bouncer',
        //     },
        //     {
        //     name: 'Dee',
        //     job: 'Aspring actress',
        //     },
        //     {
        //     name: 'Dennis',
        //     job: 'Bartender',
        //     },
        // ]
        const { characters } = this.state

        return (
        <div className="container">
            <h1>Hello, React!</h1>
            <Table characterData={characters} removeCharacter={this.removeCharacter} /> 
        </div>
        )
    }
}

export default App