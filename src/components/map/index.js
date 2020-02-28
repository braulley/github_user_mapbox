import React, { Component, Fragment } from "react";
import MapGL, { Marker } from "react-map-gl";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ModalAction from '../../store/actions/modal';
import * as UserAction from '../../store/actions/user';
import "mapbox-gl/dist/mapbox-gl.css";
require('dotenv').config({});


class Map extends Component {

  constructor(props){
    super(props);
    
    this.props.closeModal();
    
    this.state = {
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
        latitude: -23.5439948,
        longitude: -46.6065452,
        zoom: 14
      }
    };

  }  

  componentDidMount() {
    window.addEventListener("resize", this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._resize);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight
      }
    });
  };

  handleMapClick = (e) => {
    const [longitude, latitude] = e.lngLat;
    const coord = {
      longitude: longitude,
      latitude: latitude,
    };
    console.log('props', this.props);
    this.props.location(coord);
    this.props.openModal();  
  }

  render() {
    return (
      <MapGL
        {...this.state.viewport}
        onClick={this.handleMapClick}
        mapStyle="mapbox://styles/mapbox/basic-v9"
        mapboxApiAccessToken={
          'pk.eyJ1IjoiYnJhdWxsZXkiLCJhIjoiY2s2OW1iYjZwMGg3ZDNucGJwa3o0cmcxeSJ9.UZXXljltF_HHHS0w-IBocQ'
        }
        onViewportChange={viewport => this.setState({ viewport })}
      >
        {!!this.props.user && this.props.user.map( user => 
            <Marker
            latitude={user.latitude}
            longitude={user.longitude}
            captureClick={false}
          >
            <img
              style={{
                borderRadius: 100,
                width: 48,
                height: 48
              }}
              src={user.url}
            />
          </Marker>)

        }        
      </MapGL>
    );
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...ModalAction, ...UserAction }, dispatch);

const mapStateToProps = state => ({
  isOpen: state.isOpen,
  location: state.locationUser,
  user: state.user.data,
});



export default connect(mapStateToProps, mapDispatchToProps)(Map)