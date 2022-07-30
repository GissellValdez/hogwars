// HogWARSSpellBox - component that will display the playable character's spells for player to click and attach the opponent

import { Component } from 'react'
import HogWARSSpell from '../HogWARSSpell/HogWARSSpell'

export default class HogWARSSpellsBox extends Component {
    render(){
        return(
            <>
                <h5>Spell Box</h5>
                <div className='spellcontainer'>
                    {
                        Object.keys(this.props.spells).map((key, index) => {
                            return (
                                <HogWARSSpell
                                    key={key}
                                    index={index}
                                    spellName={this.props.spells[key].name}
                                    spellDamage={this.props.spells[key].damage}
                                    handleSpellClick={this.props.handleSpellClick}
                                />
                            )
                        })
                    }
                </div>
            </>
        )
    }
}