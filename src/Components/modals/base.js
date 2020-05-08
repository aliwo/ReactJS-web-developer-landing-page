import React, { Component } from 'react';
import { genModalClose, genModalOutsideClose } from "../../helper/modelHelper";


class Base extends Component {
  render() {
    return(
      <div className={`modal`} id={this.props.id} onClick={genModalOutsideClose(this.props.id)}>
        <div className="modal-content">
          <div className="modal-header">
            <span className="close" onClick={genModalClose(this.props.id)}>&times;</span>
            <h1><span>{this.props.title}</span></h1>
          </div>
          <div className="modal-body">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default Base;
