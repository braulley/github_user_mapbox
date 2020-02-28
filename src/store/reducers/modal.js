const INITIAL_STATE = {
    isOpen: false,
    locationUser: {
        longitude: 0,
        latitude: 0
    }
};

function modal(state=INITIAL_STATE, action){
    switch (action.type) {
        case 'IS_OPEN':
            return { ...state, isOpen: action.payload.isOpen }
        case 'IS_CLOSE':
            return { ...state, isOpen: action.payload.isOpen }
        case 'ADD_LOCATION':
            return { ...state, locationUser: {  longitude: action.payload.longitude
                , latitude: action.payload.latitude }}
        default:
            return state;
    }
}

export default modal;