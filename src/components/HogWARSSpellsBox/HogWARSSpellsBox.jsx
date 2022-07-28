// HogWARSSpellBox - component that will display the playable character's spells for player to click and attach the opponent

import { Component } from 'react'
import Spell from '../HogWARSSpell/HogWARSSpell'

export default class HogWARSSpellsBox extends Component {
    render(){
        return(
            <>
                <h5>Spell Box</h5>
                {
                    Object.keys(this.props.spells).map((key, index) => {
                        return (
                            <Spell
                                key={key}
                                index={index}
                                details={this.props.spells[key]}
                            />
                        )
                    })
                }
            </>
        )
    }
}