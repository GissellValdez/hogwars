// HogWARSOpponentBox component that will have Opponent components (avatar and healthbox)

import { Component } from 'react'
import HogWARSOpponentAvatar from '../HogWARSOpponentAvatar/HogWARSOpponentAvatar'
import HogWARSOpponentHealthBox from '../HogWARSOpponentHealthBox/HogWARSOpponentHealthBox'

export default class HogWARSOpponentBox extends Component{
    render(){
        return(
            <>
                <h1>Game Board</h1>
                <HogWARSOpponentAvatar opponentAvatar={this.props.opponent} />
                <HogWARSOpponentHealthBox opponentHealth={this.props.opponent} />
            </>
        )
    }
}