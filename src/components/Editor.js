import React, { Component } from 'react'
import '../styles/Editor.css'
import { updateContent } from '../redux/slices/updateContentSlice'
import { connect } from 'react-redux'
import marked from 'marked'


export class Editor extends Component {
        constructor(props){
            super(props);

            this.state = {
                editorContent:null,
            }

            this.handleEditorContentChange = this.handleEditorContentChange.bind(this);

        }

        getMarkedDownText(text){
                let rawMarkUp = marked(text, {sanitize:true});
                return { __html: rawMarkUp };
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