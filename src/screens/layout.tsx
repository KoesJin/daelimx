import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 8fr;
    height: calc(100vh - 5vh);
    padding: 20px 0;
`;

const BoottomMenu = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column-reverse;
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`;

const MenuItem = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    svg {
        width: 35px;
        height: 35px;
    }
`;

const StyledLink = styled(Link)`
    color: inherit;
`;

const Content = styled.div``;

interface LayoutProps {
    children: React.ReactNode; // children을 받을 수 있도록 타입 정의
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Container>
            <Menu>
                {/* 홈 메뉴 */}
                <StyledLink to={'/'}>
                    <MenuItem>
                        <svg
                            className="w-6 h-6 text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                            />
                        </svg>
                    </MenuItem>
                </StyledLink>
                <StyledLink to={'/profile'}>
                    {/* 프로필 메뉴 */}
                    <MenuItem>
                        <svg
                            className="w-6 h-6 text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 9h3m-3 3h3m-3 3h3m-6 1c-.306-.613-.933-1-1.618-1H7.618c-.685 0-1.312.387-1.618 1M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                            />
                        </svg>
                    </MenuItem>
                </StyledLink>
                {/* 하단 메뉴 */}

                <BoottomMenu>
                    {/* 로그아웃 메뉴 */}
                    <StyledLink to={'/signin'}>
                        <MenuItem>
                            <svg
                                className="w-6 h-6 text-gray-800 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                            </svg>
                        </MenuItem>
                    </StyledLink>
                </BoottomMenu>
            </Menu>

            <Content>{children}</Content>
        </Container>
    );
};

export default Layout;
