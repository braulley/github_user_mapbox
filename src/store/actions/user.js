export function addUser(data) {
    return {
        type: 'ADD_USER',
        payload: {
            username: data.username,
            location: data.location,
        },
    }
}

export function removeUser(id) {
    return {
        type: 'REMOVE_USER',
        payload: { id : id },
    }
    
}

export function success(data){

    return {
        type: 'USER_SUCCESS',
        payload: data,
    }
}


export function error(error) {
    
    return {
        type: 'USER_ERROR',
        payload: error,
    }
}