import React, { useEffect, useState } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import LoadingScreen from './screens/loading-screens';
import { auth } from './firebaseConfig';
import reset from 'styled-reset';

// 전체 css 스타일을 Reset
const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background: linear-gradient(135deg, #000000, #1a2a6c); /* 검정에서 어두운 파란색으로 */
    color: white;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit-active {
    opacity: 0;
    transition: opacity 500ms ease-out;
  }
`;

const AnimationContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
`;

function App() {
    const [loading, setLoading] = useState(true);

    // Firebase 인증 상태 체크
    const isLogin = async () => {
        await auth.authStateReady();
        setLoading(false);
    };

    useEffect(() => {
        isLogin();
    }, []);

    const location = useLocation();

    return (
        <Container>
            <GlobalStyle />
            {loading ? (
                <LoadingScreen />
            ) : (
                <TransitionGroup component={null}>
                    {' '}
                    <CSSTransition key={location.pathname} classNames="fade" timeout={500}>
                        <AnimationContainer>
                            <Outlet />
                        </AnimationContainer>
                    </CSSTransition>
                </TransitionGroup>
            )}
        </Container>
    );
}

export default App;
