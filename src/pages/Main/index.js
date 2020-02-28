import React, { Fragment } from 'react';
import Map from '../../components/map';
import Container from '../../components/container';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ModalAction from '../../store/actions/modal';
import Modal from '../../components/modal';

import './main.css'

const Main = () => (
    <Fragment>
        <div className="main">
            <Map />
            <Container />
            <Modal />
        </div>        
    </Fragment>    
);

const mapStateToProps = state => ({
  isOpen: state.isOpen,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ModalAction, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(Main);
