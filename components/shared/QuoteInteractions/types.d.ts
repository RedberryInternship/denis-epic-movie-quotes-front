export type PropsType = {
  commentCount: number;
  likeCount: number;
  isLiked: boolean;
  setFocusOnComment?: () => void;
  submitLikeOrUnlike?: () => void;
};
