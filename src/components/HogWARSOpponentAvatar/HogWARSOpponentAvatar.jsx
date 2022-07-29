// component for the opponent avatar on the game board

import { Component } from "react";

export default class HogWARSOpponentAvatar extends Component {
    render(){
        return(
            <>
                <div className="opponentAvatar">
                    <img src={this.props.opponentAvatar.opponentImg} alt="Not Available" />
                </div>
            </>
        )
    }
}