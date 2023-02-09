import { useLocale } from 'hooks';
import { useQueryClient } from 'react-query';

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

  return {
    locale,
    isLiked,
    refetchPage,
  };
};
