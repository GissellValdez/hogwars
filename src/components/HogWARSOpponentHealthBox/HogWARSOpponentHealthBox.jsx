// component for the opponent's health box on the game board

import { Component } from "react";

export default class HogWARSOpponentHealthBox extends Component {
    render(){
        return(
            <>
                <h2>{this.props.opponentHealth.name}</h2>
                <h3>HP: {this.props.opponentHealth.hp}</h3>
            </>
        )
    }
}