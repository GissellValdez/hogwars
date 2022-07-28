// game board component rendered by the HogWARSGamePage

import { Component } from 'react'
import HogWARSPlayerBox from '../HogWARSPlayerBox/HogWARSPlayerBox'
import HogWARSSpellsBox from '../HogWARSSpellsBox/HogWARSSpellsBox'
import HogWARSOpponentBox from '../HogWARSOpponentBox/HogWARSOpponentBox'
import HogWARSTextBox from '../HogWARSTextBox/HogWARSTextBox'

export default class HogWARSGameBoard extends Component {
    state = {
        player1: {
            name: 'Harry Potter',
            house: 'Gryffindor',
            playerImg: 'https://i.ibb.co/MVTfHsm/harryplayerimg.jpg',
            opponentImg: 'https://i.ibb.co/bvVDzGW/harryoppimg.png',
            hp: 500,
            spells: {
                spellOne: { name:'Expecto Patronum', damage: 50 },
                spellTwo: { name:'Expelliarmus', damage: 30 },
                spellThree: { name:'Sectumsempra', damage: 75 },
                spellFour: { name:'Stupify', damage: 45 },
            }
        },
        player2: {
            name: 'Lord Voldemort',
            house: 'Slytherin',
            playerImg: 'hhttps://i.ibb.co/G9JG5rb/Lord-Voldemort-Harry-Potter-Official-cardboard-cutout-buy-now-at-starstills-74553.jpg',
            opponentImg: 'https://i.ibb.co/gJMsqSq/voldemortoppimg.jpg',
            hp: 500,
            spells: {
                spellOne: { name:'Cruciatus Curse', damage: 75 },
                spellTwo: { name:'Imperius Curse', damage: 50 },
                spellThree: { name:'Avada Kedavra', damage: 1000 },
                spellFour: null,
            }
        },
        playerFaint: false,
        opponentFaint: false,
        gameOver: false
    }

    render(){
        return(
            <>
                <h1>Game Board</h1>
                <HogWARSPlayerBox player={this.state.player1} />
                <HogWARSSpellsBox spells={this.state.player1.spells} />
                <HogWARSOpponentBox opponent={this.state.player2} />
                <HogWARSTextBox gameText="Test game text" />
            </>
        )
    }
}