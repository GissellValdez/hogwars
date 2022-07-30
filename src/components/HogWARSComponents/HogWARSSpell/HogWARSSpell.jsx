// HogWARSSpellBox - component that will display the playable character's spells for player to click and attach the opponent

import { Component } from 'react'

export default class HogWARSSpell extends Component {
    render(){
        const name = this.props.spellName
        const damage = this.props.spellDamage
        return(
            <>
                <button onClick={ () => this.props.handleSpellClick(name, damage) } >
                    {name} ({damage})
                </button>
            </>
        )
    }
}