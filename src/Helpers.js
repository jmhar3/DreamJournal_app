import jwt from 'jwt-decode';

export function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function userId() {
    return jwt(localStorage.getItem('jwt')).user_id;
}

export function reducer(previousValue, currentValue) {
    return previousValue + currentValue;
}