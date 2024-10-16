import React, { useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Home from './screens/home';
import Profile from './screens/profile';
import SigninScreen from './screens/signin-screen';
import SignupScreen from './screens/signup-screen';
import reset from 'styled-reset';
import { auth } from './firebaseConfig';
import LoadingScreen from './screens/loading-screens';
import ProtectedRouter from './components/protected-router';

// react-router-dom을 활용한 Page 관리
// - Page : home, profile, signin, signup
const router = createBrowserRouter([
    {
        path: '/',
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
        ],
    },
    {
        path: '/signin',
        element: <SigninScreen />,
    },
    {
        path: '/signup',
        element: <SignupScreen />,
    },
]);

const Container = styled.div`
    width: 100%;
    height: 100vh;
`;

function App() {
    // 로딩 여부
    const [loading, setLoading] = useState(true);

    // 로그인 여부를 파악하기 위한함수
    // -> Firebase(Server)를 통해서 로그인 여부를 확인
    const isLogin = async () => {
        // 1. 로딩 시작
        // 2. Firebase를 통해서 로그인 했는지 여부를 확인
        await auth.authStateReady(); // 비동기 작업
        // 3. 로딩 종료
        setLoading(false);
    };

    // 페이지가 새로 렌더링될 때마다 로딩 상태를 설정
    useEffect(() => {
        isLogin();
    }, []); // 빈 배열을 사용하여 페이지가 처음 로드될 때마다 실행

    return loading ? (
        <LoadingScreen />
    ) : (
        <Container className="App">
            <GlobalStyle />
            <RouterProvider router={router}></RouterProvider>
        </Container>
    );
}

export default App;

// 전체 css 스타일을 Reset
const GlobalStyle = createGlobalStyle`
  ${reset}
  body{
    background: linear-gradient(135deg, #000000, #1a2a6c); /* 검정에서 어두운 파란색으로 */
    color:  white;
  }
`;
