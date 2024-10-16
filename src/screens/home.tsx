// home 화면을 구성
import styled from 'styled-components';
import { auth } from '../firebaseConfig';
// styled-component 를 통한 css 구성
const Container = styled.div``;
const Title = styled.h1``;

// 실제 페이지를 구성하는 code
export default () => {
    // 로그아웃 함수
    const signOut = async () => {
        await auth.signOut();
    };
    return (
        <Container>
            <Title>Home</Title>
            <button
                onClick={() => {
                    signOut();
                    window.location.reload(); // 로그아웃 후 페이지 새로고침
                }}
            >
                로그아웃
            </button>
        </Container>
    );
};
