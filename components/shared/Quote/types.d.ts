import { PropsWithChildren } from 'react';
import { Comment, UserFromDatabase } from 'types';

export type PropsType = PropsWithChildren<{
  id: number;
  image: string;
  isLiked: boolean;
  likeCount: number;
  refetchLikes: () => void;
  refetchComments: () => void;
  comments?: Comment[];
  user: Omit<UserFromDatabase, 'emails' | 'google_id'>;
}>;
