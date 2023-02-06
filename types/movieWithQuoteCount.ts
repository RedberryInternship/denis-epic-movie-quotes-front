import { Movie } from 'types';

export type MovieWithQuoteCount = Movie & { quotes_count: number };
