// component for the player's health box on the game board

import { Component } from "react";

export default class HogWARSPlayerHealthBox extends Component {
    render(){
        return(
            <>
                <div className='playerHealthBox'>
                    <h2>{this.props.playerHealth.name}</h2>
                    <h3>HP: {this.props.playerHealth.hp}</h3>
                </div>
            </>
        )
    }
}