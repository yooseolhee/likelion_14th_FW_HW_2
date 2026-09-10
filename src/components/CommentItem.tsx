import styled from "styled-components";
import type { Comment } from "../types";


interface CommentProps {
    comment : Comment;
}

function CommentItem({comment}:CommentProps) {
    return(
        <Card>
            <Info>
            <Author>{comment.author}</Author>
            <CommentDate>{comment.date}</CommentDate>
            </Info>
            <Content>{comment.content}</Content>
        </Card>
    )
}

const Card = styled.div`
  padding: 16px;
  border: 1px solid #eee;
  border-radius: 12px;
  margin-bottom: 12px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Info = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`

const Author = styled.h3`
  margin: 0 0 8px 0;
  font-size: 18px;
  color: #333333;
`;

const Content = styled.p`
  margin: 0 0 12px 0;
  font-size: 14px;
  color: #666666;
`;

const CommentDate = styled.small`
  font-size: 12px;
  color: #999999;
`;

export default CommentItem;