// game board component rendered by the HogWARSGamePage

import React, { Component } from 'react'
import './HogWARSGameBoard.css'
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
            currentHP: 500,
            maxHP: 500,
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
            currentHP: 500,
            maxHP: 500,
            spells: {
                spellOne: { name:'Cruciatus Curse', damage: 75 },
                spellTwo: { name:'Imperius Curse', damage: 50 },
                spellThree: { name:'Avada Kedavra', damage: 1000 },
                spellFour: null,
            }
        },
        playerDead: false,
        opponent: false,
        gameOver: false,
        textMessage: ""
    }

    componentDidMount(){
        this.gameTextStart()
    }

    componentDidUpdate(){}

    gameTextStart() {
        setTimeout(() => {
        this.setState(
            () => {
            return {
                textMessage: `${this.state.player2.name} has arrived to duel ${this.state.player1.name}`,
                enemyDead: false
            };
            },
            () => {
            setTimeout(() => {
                this.setState(
                {
                    textMessage: `Both ${this.state.player2.name} and ${this.state.player1.name} have both bowed...`,
                    playerDead: false
                },
                () => {
                    setTimeout(() => {
                    this.setState({
                        textMessage: "Please choose a spell to attack with..."
                    });
                    }, 3000);
                }
                );
            }, 3000);
            }
        );
        }, 1000);
    };

    opponentTurn = (spellName, damage) => {
        damage = damage + Math.floor(Math.random() * 11);
        // use attack to calculate enemy HP and adjust progress bar
        
        // this gets the current hp and reduces it by damage, to be set later in setState
        var playerCurrentHP = {...this.state}
        console.log(playerCurrentHP)
        playerCurrentHP.player1.currentHP -= damage;
        // console.log(playerCurrentHP)

        this.setState(
            prevState => {
                return { 
                    playerCurrentHP, 
                    textMessage: `${spellName} has done ${damage} damage!... now at ${playerCurrentHP.player1.currentHP}`
                }
            }
        );
        //console.log(this.state.player1.currentHP)
    }

    handleSpellClick = (spellName, damage) => {
        damage = damage + Math.floor(Math.random() * 11);
        // use attack to calculate enemy HP and adjust progress bar
        
        // this gets the current hp and reduces it by damage, to be set later in setState
        var opponentCurrentHP = {...this.state}
        console.log(opponentCurrentHP)
    opponentCurrentHP.player2.currentHP -= damage;
        // console.log(playerCurrentHP)

        this.setState(
            prevState => {
                return { 
                    opponentCurrentHP, 
                    textMessage: `${spellName} has done ${damage} damage!... now at ${opponentCurrentHP.player2.currentHP}`
                }
            }
        );
        //console.log(this.state.player1.currentHP)
    }

    render(){
        return(
            <>
                <h1>Game Board</h1>
                <HogWARSOpponentBox opponent={this.state.player2} />
                <HogWARSPlayerBox player={this.state.player1} />
                <HogWARSSpellsBox spells={this.state.player1.spells} handleSpellClick={this.handleSpellClick}/>
                <HogWARSTextBox gameText={this.state.textMessage} />
            </>
        )
    }
}