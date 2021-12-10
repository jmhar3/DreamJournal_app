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

export function date() {
    const dateTime = new Date()
    const day = dateTime.getDate()
    const month = dateTime.getMonth() + 1
    const year = dateTime.getFullYear()
    const hours = dateTime.getHours()
    const minutes = dateTime.getMinutes()

    const validDate = (date) => {
        if (date.toString().length === 1) {
            return "0" + date
        } else {
            return date
        }
    }

    return year + "-" + validDate(month) + "-" + validDate(day) + "T" + validDate(hours) + ":" + validDate(minutes);
}