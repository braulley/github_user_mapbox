/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import * as UserAction from '../../store/actions/user';
import './index.css';

function Detail (props) {

    console.log('PROPSAO', props)

    const username = props.username.map( user => 
        <div className="card-column">
            <div className="item">
                <img src={user.url} alt="Photo User" height="42" width="42" />
            </div>
            <div className="item">
                <strong>{user.name}</strong>
                <span>{user.login}</span>
            </div>
            <div className="item icon">
                <FontAwesomeIcon onClick={() => props.removeUser(user.id)}  icon={faTimesCircle} size='xs' color='#f00' />
            </div>
            <div className="item icon">
                <FontAwesomeIcon icon={faAngleRight} size='xs' />
            </div> 
        </div>
    );

    return (
        <div id="card">
           {!!props.username  && username}
        </div>
    );
};    

const mapStateToProps = state => ({
  username: state.user.data,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UserAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Detail);