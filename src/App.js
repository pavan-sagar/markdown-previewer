import React, { Component } from 'react'
import './styles/App.css'
import Editor from './components/Editor'
import Previewer from './components/Previewer'
import { connect } from 'react-redux';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      content:''
    }

  }


  //Rendering 
  render() {
    return (
      <div className="container-fluid">
        { !this.props.previewerIsMaximised && <Editor id="editor-component"/> }
        { !this.props.editorIsMaximised && <Previewer data={this.props.content} /> }
      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return {
    content : state.updateContentReducer.content,
    editorIsMaximised : state.maximiseWindowReducer.editorIsMaximised,
    previewerIsMaximised : state.maximiseWindowReducer.previewerIsMaximised,
  }

}

export default connect(mapStateToProps,null)(App);
