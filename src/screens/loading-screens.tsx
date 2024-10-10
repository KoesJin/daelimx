import { styled, keyframes } from 'styled-components';

// 스피너 애니메이션 keyframes
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// 텍스트 페이드 인 애니메이션
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// 컨테이너 스타일
const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #ece9e6 0%, #ffffff 100%); /* 부드러운 그라데이션 배경 */
`;

// 스피너 스타일
const Spinner = styled.div`
    border: 6px solid rgba(200, 200, 200, 0.6); /* 연한 회색 테두리 */
    border-top: 6px solid #ff6b6b; /* 포인트 색상 */
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: ${spin} 0.8s ease-in-out infinite; /* 부드러운 회전 애니메이션 */
    margin-bottom: 30px; /* 텍스트와의 간격 */
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1); /* 살짝의 그림자 */
`;

// 로딩 텍스트 스타일
const LoadingText = styled.div`
    font-size: 20px;
    color: #555;
    font-family: 'Helvetica Neue', sans-serif;
    animation: ${fadeIn} 1.2s ease-in-out infinite alternate; /* 부드러운 페이드 인/아웃 */
    letter-spacing: 0.05em; /* 텍스트 간격 */
`;

export default function LoadingScreen() {
    return (
        <Container>
            <Spinner />
            <LoadingText>Loading...</LoadingText>
        </Container>
    );
}
