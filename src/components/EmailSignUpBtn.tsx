import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const Container = styled.div`
    background-color: #1f8acc;
    border-radius: 20px;
    padding: 10px 20px;
    cursor: pointer;
`;

export default function () {
    //회원가입 페이지(/signup)로 이동하기
    const navigation = useNavigate();

    // 회원가입페이지 이동
    const onClick = () => {
        navigation('/signup');
    };

    return <Container onClick={onClick}>이메일 계정으로 회원가입</Container>;
}
