import { useEffect, useRef, useState } from 'react';
import { QueryFunctionContext, useInfiniteQuery } from 'react-query';
import { getNewsfeedQuotes } from 'services';
import {
  CursorPaginatedResponse,
  NewsfeedQuote as NewsfeedQuoteType,
  UserFromDatabase,
} from 'types';
import { useUserStore } from 'hooks';

export const useNewsfeedPage = (
  userData: UserFromDatabase,
  initialQuotes: CursorPaginatedResponse<NewsfeedQuoteType[] | []>
) => {
  const user = useUserStore(userData);

  const [searchIsActive, setSearchIsActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchQuotes = async ({ pageParam }: QueryFunctionContext) => {
    return await getNewsfeedQuotes(pageParam, searchQuery);
  };

  const {
    data: paginatedQuotes,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = useInfiniteQuery(['quotes', searchQuery], fetchQuotes, {
    placeholderData: {
      pages: [initialQuotes],
      pageParams: [],
    },
    getNextPageParam: (lastPage, allPages) => {
      if (allPages.length > 1) {
        const firstID = allPages[0].data[0].id;
        for (const quote of lastPage.data) {
          if (quote.id === firstID) {
            allPages.pop();
            return;
          }
        }
      }
      return lastPage.next_cursor;
    },
  });

  useEffect(() => {
    refetch();
  }, [refetch, searchQuery]);

  const bottomRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(async (entry) => {
        if (entry.isIntersecting && hasNextPage) {
          await fetchNextPage();
        }
      });
    });
    if (bottomRef.current) {
      observer.observe(bottomRef.current);
    }
    return () => observer.disconnect();
  }, [bottomRef, fetchNextPage, hasNextPage]);

  return {
    user,
    paginatedQuotes,
    bottomRef,
    searchIsActive,
    setSearchIsActive,
    searchQuery,
    setSearchQuery,
  };
};
