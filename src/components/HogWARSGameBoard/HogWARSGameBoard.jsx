// game board component rendered by the HogWARSGamePage

import { Component } from 'react'
import HogWARSPlayerAvatar from '../HogWARSPlayerAvatar/HogWARSPlayerAvatar'
import HogWARSPlayerHealthBox from '../HogWARSPlayerHealthBox/HogWARSPlayerHealthBox'

export default class HogWARSGameBoard extends Component {
    state = {
        player1: {
            name: 'Harry Potter',
            house: 'Gryffindor',
            playerImg: 'https://i.ibb.co/MVTfHsm/harryplayerimg.jpg',
            opponentImg: 'https://i.ibb.co/bvVDzGW/harryoppimg.png',
            hp: 500,
        },
        player2: {
            name: 'Lord Voldemort',
            house: 'Slytherin',
            playerImg: 'hhttps://i.ibb.co/G9JG5rb/Lord-Voldemort-Harry-Potter-Official-cardboard-cutout-buy-now-at-starstills-74553.jpg',
            opponentImg: 'hhttps://i.ibb.co/gJMsqSq/voldemortoppimg.jpg',
            hp: 500,
        },
        playerFaint: false,
        opponentFaint: false,
        gameOver: false
    }

    render(){
        return(
            <>
                <h1>Game Board</h1>
                <HogWARSPlayerAvatar playerAvatar={this.state.player1} />
                <HogWARSPlayerHealthBox playerAvatar={this.state.player1} />
            </>
        )
    }
}