// game board component rendered by the HogWARSGamePage

import { Component } from 'react'
import HogWARSPlayerAvatar from '../HogWARSPlayerAvatar/HogWARSPlayerAvatar'

export default class HogWARSGameBoard extends Component {
    state = {
        player1: {
            name: 'Harry Potter',
            house: 'Gryffindor',
            playerImg: '',
            opponentImg: '',
            hp: 500
        },
        player2: {
            name: 'Lord Voldemort',
            house: 'Slytherin',
            playerImg: '',
            opponentImg: '',
            hp: 500
        },
        playerFaint: false,
        opponentFaint: false,
        gameOver: false
    }

    render(){
        return(
            <>
                <h1>Game Board</h1>
                <HogWARSPlayerAvatar />
            </>
        )
    }
}