import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { sendLikeRequest, sendStoreCommentRequest } from 'services';
import { useForm } from 'react-hook-form';

export const useQuote = (
  id: number,
  isLiked: boolean,
  refetchLikes: () => void,
  refetchComments: () => void
) => {
  const user = useSelector((state: RootState) => state.user);

  const submitLikeOrUnlike = async () => {
    await sendLikeRequest(isLiked, id);
    await refetchLikes();
  };

  const {
    register,
    handleSubmit: handleCommentSubmit,
    reset,
    setFocus,
  } = useForm<{
    comment: string;
  }>();

  const submitComment = async (fields: { comment: string }) => {
    await sendStoreCommentRequest(fields.comment, id);
    await refetchComments();
    reset();
  };
  const commentSubmitHandler = handleCommentSubmit(submitComment);

  const setFocusOnComment = () => setFocus('comment');

  return {
    user,
    register,
    submitLikeOrUnlike,
    commentSubmitHandler,
    setFocusOnComment,
  };
};
