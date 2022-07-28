// HogWARSPlayerBox component that will have player components (avatar and healthbox)

import { Component } from 'react'
import HogWARSPlayerAvatar from '../HogWARSPlayerAvatar/HogWARSPlayerAvatar'
import HogWARSPlayerHealthBox from '../HogWARSPlayerHealthBox/HogWARSPlayerHealthBox'

export default class HogWARSPlayerBox extends Component{
    render(){
        return(
            <>
                <h1>Game Board</h1>
                <HogWARSPlayerAvatar playerAvatar={this.props.player} />
                <HogWARSPlayerHealthBox playerHealth={this.props.player} />
            </>
        )
    }
}