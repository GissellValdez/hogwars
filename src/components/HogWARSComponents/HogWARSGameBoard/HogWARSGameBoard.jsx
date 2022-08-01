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
                { name:'Avada Kedavra', damage: 80 },
                { name:'Nagini Bite', damage: 20 },
            ]
        },
        playerDead: false,
        opponentDead: false,
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
            // if enemy is still alive, proceed with enemy turn
            damage = damage + Math.floor(Math.random() * 11);
            // use attack to calculate enemy HP and adjust progress bar
            
            // this gets the current hp and reduces it by damage, to be set later in setState
            var playerCurrentHP = {...this.state}
            console.log(playerCurrentHP)

        // first, check if enemy fainted. End Game if they did.

        var opponentCurrentHP = {...this.state}
        if (opponentCurrentHP.player2.currentHP == 0) {
                this.setState(
                {
                textMessageOne: `${this.state.enemyName} fainted.`,
                textMessageTwo: `${this.state.playerName} wins!`,
                enemyDead: true
                },
                () => {
                setTimeout(() => {
                    this.setState({
                        gameOver: true
                    });
                }, 3000);
                }
            );
        } else {
            
            if (playerCurrentHP.player1.currentHP - damage <= 0){
                playerCurrentHP.player1.currentHP = 0;
            } else playerCurrentHP.player1.currentHP -= damage;
            // console.log(playerCurrentHP)
            this.setState(
                prevState => {
                    return { 
                        playerCurrentHP,
                        textMessage: `${this.state.player2.name} used ${spellName} and dealt ${damage} damage!... You now have ${playerCurrentHP.player1.currentHP} HP`
                    }
                },
                () => {
                    setTimeout(() => {
                        if (playerCurrentHP.player1.currentHP == 0) {
                            this.setState(
                                {
                                    textMessage: `${playerCurrentHP.player1.name} has died... ${opponentCurrentHP.player2.name} wins the duel!`
                                },
                                () => {
                                    setTimeout(() => {
                                        this.setState({
                                            gameOver: true
                                        });
                                    },3000);
                                }
                            )
                        } else {
                            this.setState({
                                textMessage: "Please choose a spell to attack with..."
                            });
                        }
                    }, 2000);
                }
            );
            //console.log(this.state.player1.currentHP)
        }
    }

    handleSpellClick = (spellName, damage) => {
        damage = damage + Math.floor(Math.random() * 11);
        // use attack to calculate enemy HP and adjust progress bar
        
        // this gets the current hp and reduces it by damage, to be set later in setState
        var opponentCurrentHP = {...this.state}
        console.log(opponentCurrentHP)

        if (opponentCurrentHP.player2.currentHP - damage <= 0){
            opponentCurrentHP.player2.currentHP = 0;
        } else opponentCurrentHP.player2.currentHP -= damage;
        
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

    handleResetGame = () => {
        console.log("play again!!!");
        var resetGame = {...this.state};
        resetGame.player1.currentHP = resetGame.player1.maxHP;
        resetGame.player2.currentHP = resetGame.player2.maxHP;
        resetGame.gameOver = false;
        resetGame.textMessage = "";
        resetGame.playerDead=false;
        resetGame.enemyDead=false;
        this.setState({
            resetGame
        });
        this.gameTextStart()
    };

    render(){
        return(
            <>
                <div className='game-board'>
                    <button onClick={this.handleResetGame} >Click here to reset or play again</button>
                    <HogWARSOpponentBox opponent={this.state.player2} />
                    <HogWARSPlayerBox player={this.state.player1} />
                    <HogWARSSpellsBox spells={this.state.player1.spells} handleSpellClick={this.handleSpellClick}/>
                    <HogWARSTextBox gameText={this.state.textMessage} />    
                </div>
            </>
        )
    }
}