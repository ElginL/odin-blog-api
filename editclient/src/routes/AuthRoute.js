import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import Home from '../pages/Home';
import ModifyPost from '../pages/ModifyPost';

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
                    element={<ModifyPost isEdit={true} />}
                />
                <Route
                    path="/post/create"
                    element={<ModifyPost isEdit={false} />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;