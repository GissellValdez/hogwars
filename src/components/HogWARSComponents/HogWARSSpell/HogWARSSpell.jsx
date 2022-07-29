// HogWARSSpellBox - component that will display the playable character's spells for player to click and attach the opponent

import { Component } from 'react'

export default class HogWARSSpell extends Component {
    render(){
        return(
            <>
                <button>{this.props.spellName} ({this.props.spellDamage})</button>
            </>
        )
    }
}