import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import Welcome from '../pages/Welcome';
import Login from '../pages/Login';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Welcome />}
                />
                <Route
                    path="/login"
                    element={<Login />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;