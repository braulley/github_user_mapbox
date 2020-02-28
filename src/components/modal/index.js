import React, { useState } from 'react';
import Modal from 'react-modal';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ModalActions from '../../store/actions/modal';
import * as UserActions from '../../store/actions/user';
import './index.css';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
    }
};

function ModalUser(props){

    const [username, setUsername] = useState('');
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
    }

    function handleSubmit(e) {
      e.preventDefault();
      const data = {
        username: username,
        location: props.locationUser,
      }
      props.addUser(data);
      props.closeModal();

    }

    function handleChange(e) {      
      setUsername(e.target.value);
    }

      return (
        <div>
          <Modal
            isOpen={props.isOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={props.isOpen}
            style={customStyles}
            contentLabel="Example Modal"
          >
              
                <h5 >Adicionar Novo Usuário</h5>
                <form onSubmit={handleSubmit}>
                    <input 
                      type="text" 
                      name="usename"
                      onChange={handleChange} 
                      autoComplete="off"
                      placeholder="Usuário no Github" />
                    <div className="mainButton">
                        <button id="cancel" onClick={() => props.closeModal()}>Cancelar</button>
                        <button id="save" type="submit">Salvar</button>
                    </div>                                    
                </form>                                
          </Modal>
        </div>
      );
}

const mapStateToProps = state => ({
  isOpen: state.modal.isOpen,
  locationUser: state.modal.locationUser,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...ModalActions, ...UserActions }, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(ModalUser)