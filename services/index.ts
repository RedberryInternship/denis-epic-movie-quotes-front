import axios from './axios';
import {
  AddEmailForm,
  ApiDataResponse,
  ApiResponse,
  CursorPaginatedResponse,
  ForgotForm,
  Genre,
  LoginForm,
  MovieForm,
  MovieWithQuoteCount,
  NewsfeedQuote,
  ProfileForm,
  RegisterForm,
  ResetPasswordForm,
  UserFromDatabase,
} from 'types';
import FormData from 'form-data';

export const fetchCSRFToken = async () => {
  return await axios.get('/sanctum/csrf-cookie');
};

export const postLoginData = async (formValues: LoginForm) => {
  try {
    await fetchCSRFToken();
    return (await axios.post('/api/login', {
      username: formValues.username,
      password: formValues.password,
      remember_me: formValues.remember_me,
    })) as ApiResponse<LoginForm>;
  } catch (error) {
    return error;
  }
};

export const postRegisterData = async (formValues: RegisterForm) => {
  try {
    await fetchCSRFToken();
    return (await axios.post('/api/register', {
      username: formValues.username,
      email: formValues.email,
      password: formValues.password,
      password_confirmation: formValues.password_confirmation,
    })) as ApiResponse<RegisterForm>;
  } catch (error) {
    return error;
  }
};

export const postForgotPassData = async (formValues: ForgotForm) => {
  try {
    await fetchCSRFToken();
    return (await axios.post('/api/forgot-password', {
      email: formValues.email,
    })) as ApiResponse<ForgotForm>;
  } catch (error) {
    return error;
  }
};

export const postResetPassData = async (
  formValues: ResetPasswordForm,
  params: {
    token: string;
    email: string;
  }
) => {
  try {
    await fetchCSRFToken();
    return (await axios.post('/api/reset-password', {
      password: formValues.password,
      password_confirmation: formValues.password_confirmation,
      token: params.token,
      email: params.email,
    })) as ApiResponse<ResetPasswordForm>;
  } catch (error) {
    return error;
  }
};

export const verifyEmail = async (url: string) => {
  try {
    return await axios.get(url, {
      baseURL: '',
    });
  } catch (error) {
    return error;
  }
};

export const getUser = async (
  cookies?: string,
  origin?: string
): Promise<UserFromDatabase> => {
  return await axios.get('/api/user', {
    headers: {
      origin: origin,
      Cookie: cookies,
    },
  });
};

export const sendLogoutRequest = async () => {
  return await axios.get('/api/logout');
};

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

export const sendAddMovieRequest = async (formValues: MovieForm) => {
  try {
    const formData = new FormData();
    for (const [key, value] of Object.entries(formValues)) {
      if (key === 'image') {
        formData.append(key, value[0]);
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

export const sendAddEmailRequest = async (formValues: AddEmailForm) => {
  try {
    return await axios.post('/api/emails', {
      email: formValues.email,
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

export const sendDeleteEmailRequest = async (id: number) => {
  try {
    return await axios.delete(`/api/emails/${id}`);
  } catch (error) {
    return error;
  }
};

export const sendMakeEmailPrimaryRequest = async (id: number) => {
  try {
    return await axios.post(`/api/emails/make-primary/${id}`);
  } catch (error) {
    return error;
  }
};

export const sendUpdateProfileRequest = async (formFields: ProfileForm) => {
  try {
    const formData = new FormData();
    formData.append('_method', 'PUT');
    for (const [key, value] of Object.entries(formFields)) {
      if (key === 'image') {
        formData.append(key, value[0]);
      } else {
        formData.append(key, value);
      }
    }
    return await axios.post(`/api/profile`, formData, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (error) {
    return error;
  }
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

export const sendStoreCommentRequest = async (
  body: string,
  quoteID: number
) => {
  return await axios.post(`/api/comment`, {
    quote_id: quoteID,
    body: body,
  });
};
