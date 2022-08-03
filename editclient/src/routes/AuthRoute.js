import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import Home from '../pages/Home';
import EditPost from '../pages/EditPost';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/post/:postId"
                    element={<EditPost />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;