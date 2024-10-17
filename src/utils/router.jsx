import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../screens/home';
import Profile from '../screens/profile';
import SigninScreen from '../screens/signin-screen';
import SignupScreen from '../screens/signup-screen';
import ProtectedRouter from '../components/protected-router';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />, // App 컴포넌트가 라우트 트리의 루트에서 사용됩니다
        children: [
            {
                path: '',
                element: (
                    <ProtectedRouter>
                        <Home />
                    </ProtectedRouter>
                ),
            },
            {
                path: 'profile',
                element: (
                    <ProtectedRouter>
                        <Profile />
                    </ProtectedRouter>
                ),
            },
            {
                path: '/signin',
                element: <SigninScreen />,
            },
            {
                path: '/signup',
                element: <SignupScreen />,
            },
        ],
    },
]);
