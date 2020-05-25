import React, { Component } from 'react'
import '../styles/Previewer.css'

export class Previewer extends Component {
        constructor(props){
            super(props);


        }


    render() {
        return (
            <div class="previewer-container">
                <p class="previewer-window-header">Previewer</p>
                    <p class="previewer-content">{this.props.data}</p>
                
            </div>
        )
    }
}

export default Previewer
