import { useState } from 'react';
import { getMovies } from 'services';
import { useQuery } from 'react-query';
import { useSearchBar, useUserStore } from 'hooks';
import { MovieWithQuoteCount, UserFromDatabase } from 'types';

export const useMoviesPage = (
  userData: UserFromDatabase,
  initialMovies: MovieWithQuoteCount[]
) => {
  const user = useUserStore(userData);

  const [searchIsActive, setSearchIsActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchMovies = async () => {
    const response = await getMovies(searchQuery);
    return response.data;
  };

  const { data: movies } = useQuery(['movies', searchQuery], fetchMovies, {
    initialData: initialMovies,
  });

  const { handleSearchInputChange, resetSearch } = useSearchBar(
    setSearchQuery,
    setSearchIsActive
  );

  return {
    user,
    movies,
    handleSearchInputChange,
    resetSearch,
    searchIsActive,
    searchQuery,
    setSearchIsActive,
  };
};
