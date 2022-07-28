// component for the opponent avatar on the game board

import { Component } from "react";

export default class HogWARSOpponentAvatar extends Component {
    render(){
        return(
            <>
                <h2>Opponent Character</h2>
                <img src={this.props.opponentAvatar.opponentImg} alt="Not Available" />
            </>
        )
    }
}