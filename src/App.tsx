// src/App.tsx 
import styled from 'styled-components';
import PostItem from './components/PostItem';
import type { Post, Comment } from './types';
import Button from './components/Button';
import { useState } from 'react';
import CommentItem from './components/CommentItem';

const DUMMY: Post[] = [
  { id: 1, title: '첫 글', content: '반갑습니다', author: '동건' },
  { id: 2, title: '두번째 글', content: '나는야 TS 초고수', author: '선우(최)' },
  { id: 3, title: '세번째 글', content: '나는야 TS 초고수22', author: '유설희' },
];

const DUMMYComment: Comment[] = [
  { id: 1, author:'설희', date: '2026-09-10', content: '첫글' },
  { id: 2, author:'효리', date: '2026-09-10', content: '야호' }
];

const Title = styled.h1`
  color: #2f6feb;
`;

function App() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [comment, setComment] = useState('');

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>)=>{
    setContent(e.target.value);
  }

  const handleComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  return (
    <>
      <Title>🐘 TS 미니 게시판</Title>
      <div>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}   // 타입 안 썼는데 잘 됨!
        placeholder="제목을 입력하세요"
      />
      <p>입력 중: {title}</p>


      <textarea value={content} onChange={handleContentChange} />
      <p>textarea 입력 중인 내용 : {content}</p>


      <Button label="확인" onClick={() => alert('버튼 클릭테스트!')} />
      {DUMMY.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
      </div>

      <div>
      <p>댓글</p>
      {DUMMYComment.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
      <input
        value={comment}
        onChange={handleComment} 
        placeholder="댓글을 입력하세요"
      />
      <p>입력 중: {comment}</p>
      </div>
    </>
  );
}

export default App;