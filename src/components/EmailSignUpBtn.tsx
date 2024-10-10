import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const Container = styled.div`
    background-color: #1f8acc;
    border-radius: 20px;
    padding: 10px 20px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    svg {
        width: 18px;
    }
`;

const Title = styled.p``;

export default function () {
    //회원가입 페이지(/signup)로 이동하기
    const navigation = useNavigate();

    // 회원가입페이지 이동
    const onClick = () => {
        navigation('/signup');
    };

    return (
        <Container onClick={onClick}>
            {' '}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
            </svg>
            <Title>이메일 계정으로 회원가입</Title>
        </Container>
    );
}
