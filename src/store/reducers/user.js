const INITIAL_STATE = {
    data: [],
    error: false,
    location: {
        longitude: 0,
        latitude: 0
    }
};

function user(state=INITIAL_STATE, action) {
    
    switch (action.type) {
        case 'ADD_USER':
            return { ...state }
        case 'REMOVE_USER':
            return { ...state, data: state.data.filter( user => user.id !== action.payload.id) }
        case 'USER_SUCCESS':
            return { ...state, data: [ ...state.data, action.payload], error: false}
        case 'USER_ERROR':
            return { ...state, error: true }
        default:
            return state;
    }


}
export default user;