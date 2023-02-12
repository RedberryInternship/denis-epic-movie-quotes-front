import axios from './axios';
import {
  ApiDataResponse,
  FullMovieData,
  Genre,
  MovieForm,
  MovieWithQuoteCount,
} from 'types';
import FormData from 'form-data';

export const getMovies = async (
  searchQuery: string,
  cookies?: string,
  origin?: string
) => {
  return (await axios.get('/api/movie', {
    headers: {
      origin: origin,
      Cookie: cookies,
    },
    params: {
      search_query: searchQuery,
    },
  })) as ApiDataResponse<MovieWithQuoteCount[]>;
};

export const getMovie = async (
  id: number | string,
  cookies?: string,
  origin?: string
) => {
  return (await axios.get(`/api/movie/${id}`, {
    headers: {
      origin: origin,
      Cookie: cookies,
    },
  })) as ApiDataResponse<FullMovieData>;
};

export const deleteMovie = async (id: number) => {
  return await axios.delete(`/api/movie/${id}`);
};

export const sendAddMovieRequest = async (formValues: MovieForm) => {
  try {
    const formData = new FormData();
    for (const [key, value] of Object.entries(formValues)) {
      if (key === 'image' && value) {
        formData.append(key, (value as FileList)[0]);
      } else if (key === 'genres') {
        formData.append(
          key,
          formValues.genres.map((genre) => genre.id)
        );
      } else {
        formData.append(key, value);
      }
    }
    return await axios.post('/api/movie', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (error) {
    return error;
  }
};

export const sendEditMovieRequest = async (
  id: number,
  formValues: MovieForm
) => {
  try {
    const formData = new FormData();
    formData.append('_method', 'PUT');
    for (const [key, value] of Object.entries(formValues)) {
      if (key === 'image') {
        if (value) formData.append(key, (value as FileList)[0]);
      } else if (key === 'genres') {
        formData.append(
          key,
          formValues.genres.map((genre) => genre.id)
        );
      } else {
        formData.append(key, value);
      }
    }
    return await axios.post(`/api/movie/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (error) {
    return error;
  }
};

export const getGenres = async (cookies?: string, origin?: string) => {
  return (await axios.get('/api/genre', {
    headers: {
      origin: origin,
      Cookie: cookies,
    },
  })) as ApiDataResponse<Genre[]>;
};
