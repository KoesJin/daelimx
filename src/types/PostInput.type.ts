export type Post = {
    /**
     * 작성한 게시글 내용
     */
    post: string;
    /**
     * 게시글 작성 시간(UTC)
     */
    createAt: Number;
    /**
     * 작성자 닉네임
     */
    nickname: string;
    /**
     * 작성한 Id
     */
    userId: string;
};
