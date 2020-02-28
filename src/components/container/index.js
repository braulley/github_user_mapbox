import React, { Component } from 'react';
import Detail from '../detail';
import './index.css';

class Container extends Component {

    render(){
        return (
            <div className="container">
                <Detail />
            </div>
        );
    }
}

export default Container;