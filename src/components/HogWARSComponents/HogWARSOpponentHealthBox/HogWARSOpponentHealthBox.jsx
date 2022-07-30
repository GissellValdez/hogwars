// component for the opponent's health box on the game board

import { Component } from "react";

export default class HogWARSOpponentHealthBox extends Component {
    render(){
        return(
            <>
                <div className="opponentHealthBox">
                    <h2>{this.props.opponentHealth.name}</h2>
                    <h3>HP: {this.props.opponentHealth.currentHP}/{this.props.opponentHealth.maxHP}</h3>
                </div>
            </>
        )
    }
}