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
            spells: [
                { name:'Expecto Patronum', damage: 50 },
                { name:'Expelliarmus', damage: 30 },
                { name:'Sectumsempra', damage: 75 },
                { name:'Stupify', damage: 45 },
            ]
        },
        player2: {
            name: 'Lord Voldemort',
            house: 'Slytherin',
            playerImg: 'hhttps://i.ibb.co/G9JG5rb/Lord-Voldemort-Harry-Potter-Official-cardboard-cutout-buy-now-at-starstills-74553.jpg',
            opponentImg: 'https://i.ibb.co/gJMsqSq/voldemortoppimg.jpg',
            currentHP: 500,
            maxHP: 500,
            spells: [
                { name:'Cruciatus Curse', damage: 75 },
                { name:'Imperius Curse', damage: 50 },
                { name:'Avada Kedavra', damage: 1000 },
                { name:'Nagini Bite', damage: 20 },
            ]
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
                    textMessage: `${this.state.player2.name} used ${spellName} and dealt ${damage} damage!... They now have ${playerCurrentHP.player1.currentHP} HP`
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
                    textMessage: `${this.state.player1.name} used ${spellName} and dealt ${damage} damage!... They now have ${opponentCurrentHP.player2.currentHP} HP`
                }
            },
            () => {
                setTimeout(() => {
                    let enemySpellIndex = Math.floor(Math.random() * 4);

                    // empty now but will be set in the next map
                    var enemySpellName
                    var enemySpellDamage

                    // eslint-disable-next-line array-callback-return
                    Object.keys(this.state.player2.spells).map((key, index) => {
                        // eslint-disable-next-line eqeqeq
                        if (key == enemySpellIndex){
                            enemySpellName = this.state.player2.spells[key].name
                                
                            enemySpellDamage = this.state.player2.spells[key].damage
                                                            
                            }
                    })

                    console.log(enemySpellIndex)
                    console.log(`${enemySpellName}...${enemySpellDamage}`)

                    this.opponentTurn(enemySpellName,enemySpellDamage)
                }, 3000);
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