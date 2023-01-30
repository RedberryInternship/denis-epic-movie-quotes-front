import { useLocale } from 'hooks';
import { useQueryClient } from 'react-query';
import { sendLikeRequest } from 'services';

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

  return {
    locale,
    submitLikeOrUnlike,
    isLiked,
  };
};
