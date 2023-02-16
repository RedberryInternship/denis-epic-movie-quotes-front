import { PropsWithChildren } from 'react';
import { Comment } from 'types';

export type PropsType = PropsWithChildren<{
  id: number;
  image: string;
  isLiked: boolean;
  likeCount: number;
  refetchLikes: () => void;
  refetchComments: () => void;
  comments?: Comment[];
  authorUsername: string;
  authorImage: string;
}>;
