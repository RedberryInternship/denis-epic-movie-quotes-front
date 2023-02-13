import axios from './axios';
import {
  ApiDataResponse,
  Comment,
  CursorPaginatedResponse,
  NewsfeedQuote,
  QuoteForm,
} from 'types';
import FormData from 'form-data';

export const getNewsfeedQuotes = async (
  cursor: string,
  searchQuery: string,
  cookies?: string,
  origin?: string
) => {
  return (await axios.get(`/api/newsfeed-quotes`, {
    headers: {
      origin: origin,
      Cookie: cookies,
    },
    params: {
      cursor,
      search_query: searchQuery,
    },
  })) as CursorPaginatedResponse<NewsfeedQuote[] | []>;
};

export const sendAddQuoteRequest = async (
  movieId: number,
  formValues: QuoteForm
) => {
  try {
    const formData = new FormData();
    formData.append('movie_id', movieId);
    for (const [key, value] of Object.entries(formValues)) {
      if (key === 'image' && value) {
        formData.append(key, (value as FileList)[0]);
      } else {
        formData.append(key, value);
      }
    }
    return await axios.post('/api/quote', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (error) {
    return error;
  }
};

export const sendEditQuoteRequest = async (
  quoteID: number,
  formValues: QuoteForm
) => {
  try {
    const formData = new FormData();
    formData.append('_method', 'PUT');
    for (const [key, value] of Object.entries(formValues)) {
      if (key === 'image') {
        if (value) formData.append(key, value as FileList);
      } else {
        formData.append(key, value);
      }
    }
    return await axios.post(`/api/quote/${quoteID}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (error) {
    return error;
  }
};

export const deleteQuote = async (id: number) => {
  return await axios.delete(`/api/quote/${id}`);
};

export const getQuoteComments = async (quoteID: number) => {
  return (await axios.get(`/api/quote/${quoteID}/comments`)) as ApiDataResponse<
    Comment[]
  >;
};

export const sendStoreCommentRequest = async (
  body: string,
  quoteID: number
) => {
  return await axios.post(`/api/comment`, {
    quote_id: quoteID,
    body: body,
  });
};

export const sendLikeRequest = async (
  isUnlikeAttempt: boolean,
  quoteID: number
) => {
  return await axios.post(`/api/like`, {
    is_unlike_attempt: isUnlikeAttempt,
    quote_id: quoteID,
  });
};
