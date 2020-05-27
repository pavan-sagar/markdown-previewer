import React, { Component } from 'react'
import '../styles/Previewer.css'
import marked from 'marked'
import { toggleWindowSize } from '../redux/slices/maximiseWindowSlice'
import { connect } from 'react-redux'


export class Previewer extends Component {
        constructor(props){
            super(props);

            this.state = {
                isMaximised:false,
            }

            this.handleWindowSizeToggle = this.handleWindowSizeToggle.bind(this);

        }


        getMarkedDownText(text){
            
            let rawMarkUp = marked(text, {sanitize:true,breaks:true});
            
            return { __html: rawMarkUp };
    }


    handleWindowSizeToggle(){
        this.props.toggleWindowSize({
            windowName:'previewer',
            windowIsMaximised: !this.state.isMaximised,
        });
        
        this.setState({isMaximised: !this.state.isMaximised});
    }


    render() {

        let conditionalStyles = {
            'maximisedWindowContainer':{
                'width':'90%',
                'height':'90vh',
                
            },
            'maximisedWindowXmark':{
                'marginLeft':'94.5%',
                
            }
        }

        return (
            <div className="previewer-container" style={this.state.isMaximised ? conditionalStyles['maximisedWindowContainer'] : {}}>
                <p className="previewer-window-header">Previewer<i className="close-button" style={this.state.isMaximised ? conditionalStyles['maximisedWindowXmark'] : {}} onClick={this.handleWindowSizeToggle}>X</i></p>
                
                    <div className="previewer-content" dangerouslySetInnerHTML={this.getMarkedDownText(this.props.data)}></div>
                
            </div>
        )
    }
}



export default connect(null,{toggleWindowSize})(Previewer)
