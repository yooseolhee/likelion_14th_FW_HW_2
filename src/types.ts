// src/types.ts — 새 파일!
export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

export interface Comment {
  id: number;
  author: string;
  date : string;
  content: string;
}