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
      <div class="container-fluid">
        <Editor id="editor-component"/>
        <Previewer data={this.props.content} />
      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return {
    content : state.updateContentReducer.content
  }

  console.log("App props is",this.props.content)

}

export default connect(mapStateToProps,null)(App);
