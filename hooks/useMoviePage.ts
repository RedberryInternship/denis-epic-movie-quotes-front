import { useLocale, useUserStore } from 'hooks';
import { deleteMovie, getMovie } from 'services';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { useReducer } from 'react';
import {
  Genre,
  MovieForm,
  MovieQuote,
  MovieWithGenres,
  QuoteModalsReducerAction,
  QuoteModalsReducerState,
  UserFromDatabase,
} from 'types';

export const useMoviePage = (
  initialUser: UserFromDatabase,
  initialMovie: MovieWithGenres,
  initialQuotes: MovieQuote[]
) => {
  const locale = useLocale();
  const user = useUserStore(initialUser);

  const fetchMovie = async () => {
    const response = await getMovie(initialMovie.id);
    return response.data;
  };
  const { data } = useQuery(['movie', initialMovie.id], fetchMovie, {
    initialData: { movie: initialMovie, quotes: initialQuotes },
  });

  const movie = data?.movie;
  const quotes = data?.quotes;

  const modalReducer = (
    state: QuoteModalsReducerState,
    action: QuoteModalsReducerAction
  ) => {
    switch (action.type) {
      case 'close': {
        return {};
      }
      case 'edit_movie': {
        return { isEditingMovie: true };
      }
      case 'quote': {
        return {
          quote: quotes!.find(
            (quote) => quote.id === action.quoteID
          ) as MovieQuote,
          modalType: action.modalType,
        };
      }
      default: {
        return {};
      }
    }
  };
  const [activeModal, dispatchActiveModal] = useReducer(modalReducer, {});
  const closeModal = () => dispatchActiveModal({ type: 'close' });

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
    activeModal,
    dispatchActiveModal,
    closeModal,
    movie,
    quotes,
    deleteHandler,
    currentFormValues,
    locale,
  };
};
