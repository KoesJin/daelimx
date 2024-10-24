import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../screens/home';
import Profile from '../screens/profile';
import SigninScreen from '../screens/signin-screen';
import SignupScreen from '../screens/signup-screen';
import ProtectedRouter from '../components/protected-router';
import ErrorRouterScreen from '../screens/error-router-screen';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorRouterScreen />,
        children: [
            {
                // 홈 페이지
                path: '',
                element: (
                    <ProtectedRouter>
                        <Home />
                    </ProtectedRouter>
                ),
            },
            {
                // 프로필 페이지
                path: 'profile',
                element: (
                    <ProtectedRouter>
                        <Profile />
                    </ProtectedRouter>
                ),
            },
            // 로그인 페이지
            {
                path: '/signin',
                element: <SigninScreen />,
            },
            // 회원가입 페이지
            {
                path: '/signup',
                element: <SignupScreen />,
            },
        ],
    },
]);
