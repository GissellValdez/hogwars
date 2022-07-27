// component for the player avatar on the game board

import { Component } from "react";

export default class HogWARSPlayerAvatar extends Component {
    render(){
        return(
            <>
                <h2>PlayableCharacter</h2>
                <h3>{this.props.playerAvatar.name}</h3>
            </>
        )
    }
}