import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import Home from '../pages/Home';
import Post from '../pages/Post';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/posts/:postId"
                    element={<Post />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;