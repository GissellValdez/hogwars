// component for the opponent's health box on the game board

import { Component } from "react";

export default class HogWARSOpponentHealthBox extends Component {
    render(){
        let currentOpponentHP = (this.props.opponentHealth.hp)
        return(
            <>
                <div className="opponentHealthBox">
                    <h2>{this.props.opponentHealth.name}</h2>
                    <h3>HP: {currentOpponentHP}/{this.props.opponentHealth.hp}</h3>
                </div>
            </>
        )
    }
}