// src/App.tsx 
import styled from 'styled-components';
import PostItem from './components/PostItem';
import type { Post } from './types';
import Button from './components/Button';
import { useState } from 'react';

const DUMMY: Post[] = [
  { id: 1, title: '첫 글', content: '반갑습니다', author: '동건' },
  { id: 2, title: '두번째 글', content: '나는야 TS 초고수', author: '선우(최)' },
  { id: 3, title: '세번째 글', content: '나는야 TS 초고수22', author: '유설희' },
];

const Title = styled.h1`
  color: #2f6feb;
`;

function App() {
  const [title, setTitle] = useState('');

  return (
    <>
      <Title>🐘 TS 미니 게시판</Title>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}   // 타입 안 썼는데 잘 됨!
        placeholder="제목을 입력하세요"
      />
      <p>입력 중: {title}</p>
      <Button label="확인" onClick={() => alert('버튼 클릭테스트!')} />
      {DUMMY.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </>
  );
}

export default App;