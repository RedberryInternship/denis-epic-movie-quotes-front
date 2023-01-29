import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { QueryFunctionContext, useInfiniteQuery } from 'react-query';
import { RootState, setUser } from 'store';
import { getNewsfeedQuotes } from 'services';
import {
  CursorPaginatedResponse,
  NewsfeedQuote as NewsfeedQuoteType,
  UserFromDatabase,
} from 'types';

export const useNewsfeedPage = (
  userData: UserFromDatabase,
  initialQuotes: CursorPaginatedResponse<NewsfeedQuoteType[] | []>
) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUser(userData));
  }, [dispatch, userData]);
  const user = useSelector((state: RootState) => state.user);

  const fetchQuotes = async ({ pageParam }: QueryFunctionContext) => {
    return await getNewsfeedQuotes(pageParam);
  };

  const {
    data: paginatedQuotes,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery('quotes', fetchQuotes, {
    initialData: {
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
  };
};
