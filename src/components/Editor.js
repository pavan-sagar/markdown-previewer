import React, { Component } from 'react'
import '../styles/Editor.css'
import { updateContent } from '../redux/slices/updateContentSlice'
import { toggleWindowSize } from '../redux/slices/maximiseWindowSlice'
import { connect } from 'react-redux'
import marked from 'marked'


export class Editor extends Component {
        constructor(props){
            super(props);

            this.state = {
                editorContent:null,
                isMaximised:false,
            }

            this.handleEditorContentChange = this.handleEditorContentChange.bind(this);
            this.handleWindowSizeToggle = this.handleWindowSizeToggle.bind(this);

        }

        getMarkedDownText(text){
                let rawMarkUp = marked(text, {sanitize:true});
                return { __html: rawMarkUp };
        }


        handleEditorContentChange(e){
                
                
                this.props.updateContent({content:e.target.value})
        }

        handleWindowSizeToggle(){

            
            
            
            

            
            // console.log(`toggled state is ${this.state.isMaximised}`)

            // console.table(this.state);
            this.props.toggleWindowSize({
                windowName:'editor',
                windowIsMaximised: !this.state.isMaximised,
            });
            
            this.setState({isMaximised: !this.state.isMaximised});
        }
    
        
    render() {

        let conditionalStyles = {
            'maxmisedWindowContainer':{
                'width':'90%',
                'height':'85vh',
                'top':'2rem',
                'marginBottom':'0'
            },
            'maxmisedWindowXmark':{
                'marginLeft':'96%',
                
            }
        }


        return (
            <div className="editor-container" style={this.state.isMaximised ? conditionalStyles['maxmisedWindowContainer'] : {}}>
                <p className="editor-window-header">Editor<i className="close-button" style={this.state.isMaximised ? conditionalStyles['maxmisedWindowXmark'] : {}} onClick={this.handleWindowSizeToggle}>X</i></p>
                <textarea id='text-pad' onChange={this.handleEditorContentChange}/>
               
            </div>
        )
    }
}

export default connect(null,{ updateContent, toggleWindowSize })(Editor);