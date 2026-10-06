import styled from 'styled-components';
import type { Post } from '../types';

interface PostItemProps {
  post: Post;
  isSelected: boolean;
  onSelect: (post: Post) => void;
  isFavorite: boolean;
  onToggleFavorite: (post: Post) => void;
}

function PostItem({ post, isSelected, onSelect, isFavorite, onToggleFavorite }: PostItemProps) {
  const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); 
    onToggleFavorite(post);
  };

  return (
    <Card $selected={isSelected} $favorite={isFavorite} onClick={() => onSelect(post)}>
      <Header>
        <Title>{post.title}</Title>
        <FavoriteButton $active={isFavorite} onClick={handleFavoriteClick}>
          {isFavorite ? '담김' : '담기'}
        </FavoriteButton>
      </Header>
      <Content>{post.content}</Content>
      <Author>by {post.author}</Author>
    </Card>
  );
}


const Card = styled.div<{ $selected: boolean; $favorite: boolean }>`
  padding: 16px;
  border: 2px solid ${({ $selected }) => ($selected ? '#2f6feb' : '#eee')};
  border-radius: 12px;
  margin-bottom: 12px;
  background-color: ${({ $favorite }) => ($favorite ? '#fff8db' : '#ffffff')};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: background-color 0.2s, border-color 0.2s;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h3`
  margin: 0 0 8px 0;
  font-size: 18px;
  color: #333333;
`;

const FavoriteButton = styled.button<{ $active: boolean }>`
  padding: 4px 12px;
  border-radius: 999px;
  border: 1px solid ${({ $active }) => ($active ? '#f5b301' : '#cccccc')};
  background-color: ${({ $active }) => ($active ? '#f5b301' : '#ffffff')};
  color: ${({ $active }) => ($active ? '#ffffff' : '#666666')};
  font-weight: 700;
  cursor: pointer;
`;

const Content = styled.p`
  margin: 0 0 12px 0;
  font-size: 14px;
  color: #666666;
`;

const Author = styled.small`
  font-size: 12px;
  color: #999999;
`;

export default PostItem;
