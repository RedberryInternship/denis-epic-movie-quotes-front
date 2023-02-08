import { useLocale, useUserStore } from 'hooks';
import { deleteMovie, getMovie } from 'services';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  Genre,
  MovieForm,
  MovieQuote,
  MovieWithGenres,
  UserFromDatabase,
} from 'types';

export const useMoviePage = (
  initialUser: UserFromDatabase,
  initialMovie: MovieWithGenres,
  initialQuotes: MovieQuote[]
) => {
  const locale = useLocale();
  const user = useUserStore(initialUser);
  const [isEditing, setIsEditing] = useState(false);

  const fetchMovie = async () => {
    const response = await getMovie(initialMovie.id);
    return response.data;
  };

  const { data } = useQuery(['movie', initialMovie.id], fetchMovie, {
    initialData: { movie: initialMovie, quotes: initialQuotes },
  });

  const movie = data?.movie;
  const quotes = data?.quotes;

  const router = useRouter();

  const deleteHandler = async () => {
    await deleteMovie(movie?.id as number);
    await router.replace('/movies');
  };

  const currentFormValues = {
    title_en: movie?.title.en,
    title_ka: movie?.title.ka,
    description_en: movie?.description.en,
    description_ka: movie?.description.ka,
    director_en: movie?.director.en,
    director_ka: movie?.director.ka,
    genres: movie?.genres.map((genre: Genre) => ({
      ...genre,
      label: genre.name[locale],
      value: genre.id,
    })),
    image: null,
    release_year: movie?.release_year,
    budget: movie?.budget,
  } as MovieForm;

  return {
    user,
    isEditing,
    setIsEditing,
    movie,
    quotes,
    deleteHandler,
    currentFormValues,
    locale,
  };
};
