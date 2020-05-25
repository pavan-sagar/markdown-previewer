import React, { Component } from 'react'
import '../styles/Editor.css'
import { updateContent } from '../redux/slices/updateContentSlice'
import { connect } from 'react-redux'


export class Editor extends Component {
        constructor(props){
            super(props);

            this.state = {
                editorContent:null,
            }

            this.handleEditorContentChange = this.handleEditorContentChange.bind(this);

        }


        handleEditorContentChange(e){
                this.props.updateContent({content:e.target.value})
        }
        
    render() {
        return (
            <div class="editor-container">
                <p class="editor-window-header">Editor</p>
                <textarea id='text-pad' onChange={this.handleEditorContentChange}/>
               
            </div>
        )
    }
}

export default connect(null,{ updateContent })(Editor);