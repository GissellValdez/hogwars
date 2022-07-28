// component for the player's health box on the game board

import { Component } from "react";

export default class HogWARSPlayerHealthBox extends Component {
    render(){
        return(
            <>
                <h2>{this.props.playerAvatar.name}</h2>
                <h3>HP: {this.props.playerAvatar.hp}</h3>
            </>
        )
    }
}