export function openModal (){
    return {
        type:'IS_OPEN',
        payload: { isOpen: true }
    }
}

export function closeModal() {
    return {
        type: 'IS_CLOSE',
        payload: { isOpen: false }
    }
}

export function location(location) {
    return {
        type: 'ADD_LOCATION',
        payload: { longitude: location.longitude, latitude: location.latitude }
    }
}