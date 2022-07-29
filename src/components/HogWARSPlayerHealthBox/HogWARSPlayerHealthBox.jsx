// component for the player's health box on the game board

import { Component } from "react";

export default class HogWARSPlayerHealthBox extends Component {
    render(){
                let currentHP = (this.props.playerHealth.hp);
        return(
            <>
                <div className='playerHealthBox'>
                    <h2>{this.props.playerHealth.name}</h2>
                    <h3>HP: {currentHP}/{this.props.playerHealth.hp}</h3>
                </div>
            </>
        )
    }
}