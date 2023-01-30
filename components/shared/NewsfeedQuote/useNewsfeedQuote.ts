import { useLocale } from 'hooks';
import { useQueryClient } from 'react-query';
import { sendLikeRequest, sendStoreCommentRequest } from 'services';
import { useForm } from 'react-hook-form';

export const useNewsfeedQuote = (
  currentPageIndex: number,
  quoteID: number,
  userLikes: object[]
) => {
  const locale = useLocale();

  const queryClient = useQueryClient();
  const refetchPage = async () => {
    await queryClient.invalidateQueries({
      refetchPage: (page, index) => index === currentPageIndex,
    });
  };

  const isLiked = Boolean(userLikes.length);
  const submitLikeOrUnlike = async () => {
    await sendLikeRequest(isLiked, quoteID);
    await refetchPage();
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
    await sendStoreCommentRequest(fields.comment, quoteID);
    await refetchPage();
    reset();
  };
  const commentSubmitHandler = handleCommentSubmit(submitComment);

  const setFocusOnComment = () => setFocus('comment');

  return {
    locale,
    register,
    commentSubmitHandler,
    submitLikeOrUnlike,
    isLiked,
    setFocusOnComment,
  };
};
