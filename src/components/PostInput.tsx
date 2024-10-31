// 게시글을 작성하고 , Server(FireBase)에 업로드하는 컴포넌트

import { ReactElement, useState } from 'react';
import { styled } from 'styled-components';

const Form = styled.form`
    display: flex;
    gap: 10px;
    border: 1px solid white;
    padding: 20px 5px;
    max-width: 700px;
`;
const Profile = styled.div`
    background-color: bisque;
    width: 30px;
`;
const PostArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
`;
const TextArea = styled.textarea`
    padding: 10px;
    resize: none;
    background: linear-gradient(135deg, #000000, #1a2a6c);
    color: white;
    flex: 1;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
        'Open Sans', 'Helvetica Neue', sans-serif;
    // 1개는 상태
    &:focus {
        outline: none;
        background: #1a2a6c;
    }
    // 2개는 속성
    &::placeholder {
        color: ivory;
    }
`;

const BottomMenu = styled.div`
    display: flex;
    justify-content: space-between;
`;
const AttachFileButton = styled.label`
    background: #0a1235;
    padding: 10px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: bold;
    cursor: pointer;
    transition: opacity 300ms ease-in-out;

    &:hover,
    &:active {
        opacity: 0.8;
    }
`;
const AttachFileInut = styled.input`
    display: none;
`;
const SubmitButton = styled.input`
    background: #0a1235;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: bold;
    cursor: pointer;
    transition: opacity 300ms ease-in-out;

    &:hover,
    &:active {
        opacity: 0.8;
    }
`;

const PostInput = () => {
    // Page Logic Rendering

    // 1. 작성한 텍스트, 업로드한 이미지
    const [post, setPost] = useState<string>('');
    const [file, setFile] = useState<File>();

    // 2. 작성한 / 변경된 텍스트를 State에 저장
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        // 1. 텍스트 변경 시 발생하는 Event에서 value값 저장
        // const value = e.target.value; 아래랑 같은거임
        const {
            target: { value },
        } = e;
        // 2. value 값을 State에 저장};
        setPost(value);
    };

    // 3. 업로드한 이미지(File)를 State에 저장
    const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        // 1. 발생한 Event에서 File 정보를 가져옴
        // const {
        //     target: { files },
        // } = e;
        const files = e.target.files;

        // 2. [방어코드] : 가져온 File 이 존재하는 경우
        // - 값이 들어가 있는지 확인 + 이미지가 1개만 선택된 경우
        if (files && files.length === 1) {
            // 3. File 정보를 State에 저장
            setFile(files[0]);
        }
    };

    // 4. 작성한 게시글 정보를 Server(Firebase)에 업로드
    const onSubmit = () => {};

    return (
        <Form>
            {/* 프로필  이미지 */}
            <Profile></Profile>
            <PostArea>
                {/* 게시글 영역 */}
                <TextArea
                    value={post}
                    onChange={(e) => onChange(e)}
                    maxLength={200}
                    placeholder="무슨 일이 일어나고 있나요?"
                />
                <BottomMenu>
                    <AttachFileButton htmlFor="file">{file ? '업로드완료' : '사진업로드'}</AttachFileButton>
                    <AttachFileInut onChange={(file) => onChangeFile(file)} type="file" id="file" accept="image/*" />
                    <SubmitButton onSubmit={onSubmit} type={'submit'} value={'작성하기'} />
                </BottomMenu>
            </PostArea>
        </Form>
    );
};

export default PostInput;
