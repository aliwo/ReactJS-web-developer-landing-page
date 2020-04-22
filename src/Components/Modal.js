import React, { Component } from 'react';
import { genModalClose, genModalOutsideClose } from '../helper/modelHelper';

class Modal extends Component {

  render() {
    if(this.props.data){
      var modals = this.props.data.map(function(mod){
         return <div className={`modal`} id={mod.id} onClick={genModalOutsideClose(mod.id)}>
           <div className="modal-content">
             <div className="modal-header">
               <span className="close" onClick={genModalClose(mod.id)}>&times;</span>
               <h2>{mod.title}</h2>
             </div>
             <div className="modal-body">
               <p>{mod.description}</p>
             </div>
           </div>
          </div>
      });
    }

    return (
      <div>
        {modals}
      </div>
    );

  }
}

export default Modal;
