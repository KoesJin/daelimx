import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Home from './screens/home';
import Profile from './screens/profile';
import SigninScreen from './screens/signin-screen';
import SignupScreen from './screens/signup-screen';
import reset from 'styled-reset';

// react-router-dom을 활용한 Page 관리
// - Page : home, profile, signin, signup
const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                path: '',
                element: <Home />,
            },
            {
                path: 'profile',
                element: <Profile />,
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
    return (
        <Container className="App">
            <GlobalStyle />
            <RouterProvider router={router}></RouterProvider>
        </Container>
    );
}

export default App;

//전체 css 스타일을 Reset

const GlobalStyle = createGlobalStyle`
  ${reset}
  body{
    background-color: black;
    color:  white;
  }
`;
