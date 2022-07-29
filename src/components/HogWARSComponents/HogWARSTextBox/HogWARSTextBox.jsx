// HogWARSTextBox - this component will be displaying text throughout the game.

import { Component } from 'react'

export default class HogWARSTextBox extends Component {
    render(){
        return(
            <>
                <div className='text-box'>
                    <p>
                        {this.props.gameText}
                    </p>
                </div>
            </>
        )
    }
}