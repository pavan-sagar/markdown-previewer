import React, { Component } from "react";
import "../styles/Previewer.css";
import marked from "marked";
import { toggleWindowSize } from "../redux/slices/maximiseWindowSlice";
import { connect } from "react-redux";

export class Previewer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMaximised: false,
    };

    this.handleWindowSizeToggle = this.handleWindowSizeToggle.bind(this);
  }

  getMarkedDownText(text) {
    let rawMarkUp = marked(text, { sanitize: true, breaks: true });

    return { __html: rawMarkUp };
  }

  handleWindowSizeToggle() {
    // We update the redux store that Previewer window size is toggled

    this.props.toggleWindowSize({
      windowName: "previewer",
      windowIsMaximised: !this.state.isMaximised,
    });

    this.setState({ isMaximised: !this.state.isMaximised });
  }

  render() {
    // CSS styles for the maximised window
    let conditionalStyles = {
      maximisedWindowContainer: {
        width: "90%",
        height: "90vh",
      },
      maximisedWindowXmark: {
        marginLeft: "93.7%",
      },
    };

    // Change the expand/collapse icon by updating class onClick
    let expandCollapseIconClass = this.state.isMaximised
      ? "fa-compress"
      : "fa-arrows-alt";

    let expandedPreviewerClass = this.state.isMaximised
      ? "previewer-container-maximised"
      : "";

    return (
      <div className={`previewer-container ${expandedPreviewerClass}`}>
        <p className="previewer-window-header">
          <i
            className="fa fa-free-code-camp"
            style={{
              paddingTop: "0.25rem",
              marginLeft: "-0.5rem",
              paddingRight: "0.3rem",
            }}
          />
          Previewer
          <i
            className={`fa ${expandCollapseIconClass}`}
            
            onClick={this.handleWindowSizeToggle}
          />
        </p>

        {/* The Previewer window that displayed the marked down text with format */}
        <div
          id="preview"
          className="previewer-content"
          dangerouslySetInnerHTML={this.getMarkedDownText(this.props.data)}
        ></div>
      </div>
    );
  }
}

export default connect(null, { toggleWindowSize })(Previewer);
