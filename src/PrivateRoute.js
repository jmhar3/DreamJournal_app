import { Route, Navigate } from 'react-router-dom';

export { PrivateRoute };

function PrivateRoute({ component: Component, ...rest }) {
    const auth = localStorage.getItem('jwt')
    return (
        <Route {...rest} render={props => {
            if (!auth) {
                return <Navigate to={{ pathname: '/login', state: { from: props.location } }} />
            }
            return <Component {...props} />
        }} />
    );
}

export default PrivateRoute