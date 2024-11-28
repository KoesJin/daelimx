// home 화면을 구성
import styled from 'styled-components';
import PostInput from '../components/PostInput';
import Timeline from '../components/Timeline';
// styled-component 를 통한 css 구성
const Container = styled.div``;
const Title = styled.h1``;

// 실제 페이지를 구성하는 code
const Home = () => {
    // Logic

    // Rendering

    return (
        <Container>
            <Title>Home</Title>
            {/* 게시글 작성 */}
            <PostInput />
            {/* 작성한 게시글 받아오기 */}
            <Timeline />
        </Container>
    );
};

export default Home;
