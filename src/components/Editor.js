import React, { Component } from "react";
import "../styles/Editor.css";
import { updateContent } from "../redux/slices/updateContentSlice";
import { toggleWindowSize } from "../redux/slices/maximiseWindowSlice";
import { connect } from "react-redux";
import marked from "marked";

export class Editor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editorContent: `# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:
          
Heres some code, \`<div></div>\`, between 2 backticks.
        
\`\`\`
// this is multi-line code:
        
function anotherExample(firstLine, lastLine) {
   if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
     return multiLineCode;
   }
 }
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`,
      isMaximised: false,
    };

    this.handleEditorContentChange = this.handleEditorContentChange.bind(this);
    this.handleWindowSizeToggle = this.handleWindowSizeToggle.bind(this);
  }

  getMarkedDownText(text) {
    let rawMarkUp = marked(text, { sanitize: true });
    return { __html: rawMarkUp };
  }

  // Updating the redux store with latest input from user
  handleEditorContentChange(e) {
    this.props.updateContent({ content: e.target.value });
    this.setState({ editorContent: e.target.value });
  }

  handleWindowSizeToggle() {
    this.props.toggleWindowSize({
      windowName: "editor",
      windowIsMaximised: !this.state.isMaximised,
    });

    this.setState({ isMaximised: !this.state.isMaximised });
  }

  render() {
    // CSS styles for the maximised window

    let conditionalStyles = {
      maximisedWindowContainer: {
        width: "90vw",
        height: "90vh",
        top: "2rem",
        marginBottom: "3.1rem",
      },
      maximisedWindowXmark: {
        marginLeft: "95%",
      },
    };

    // Change the expand/collapse icon by updating class onClick

    let expandCollapseIconClass = this.state.isMaximised
      ? "fa-compress"
      : "fa-arrows-alt";

    return (
      <div
        className="editor-container"
        style={
          this.state.isMaximised
            ? conditionalStyles["maximisedWindowContainer"]
            : {}
        }
      >
        <p className="editor-window-header">
          <i
            className="fa fa-free-code-camp"
            style={{
              paddingTop: "0.25rem",
              marginLeft: "-0.5rem",
              paddingRight: "0.3rem",
            }}
          />
          Editor
          <i
            className={`fa ${expandCollapseIconClass}`}
           
            onClick={this.handleWindowSizeToggle}
          ></i>
        </p>
        <textarea id="editor" onChange={this.handleEditorContentChange}>
          {this.state.editorContent}
        </textarea>
      </div>
    );
  }
}

export default connect(null, { updateContent, toggleWindowSize })(Editor);
