// component for the player avatar on the game board

import { Component } from "react";

export default class HogWARSPlayerAvatar extends Component {
    render(){
        return(
            <>
                <div className="avatar">
                    <img src={this.props.playerAvatar.playerImg} alt="Not Available" width="350" 
     height="400"/>
                </div>
            </>
        )
    }
}