import React, { Component } from 'react'
import '../styles/Previewer.css'
import marked from 'marked'

export class Previewer extends Component {
        constructor(props){
            super(props);


        }


        getMarkedDownText(text){
            console.log(`text is ${text}`)
            let rawMarkUp = marked(text, {sanitize:true,breaks:true});
            console.log(`raw markup is ${rawMarkUp}`)
            return { __html: rawMarkUp };
    }

    render() {
        return (
            <div class="previewer-container">
                <p class="previewer-window-header">Previewer</p>
                    <div class="previewer-content" dangerouslySetInnerHTML={this.getMarkedDownText(this.props.data)}></div>
                
            </div>
        )
    }
}

export default Previewer
