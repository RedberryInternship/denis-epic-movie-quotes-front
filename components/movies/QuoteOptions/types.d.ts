import { QuoteModalsReducerAction } from 'types';
import { Dispatch } from 'react';

export type PropsType = {
  id: number;
  movieID: number;
  dispatchActiveModal: Dispatch<QuoteModalsReducerAction>;
};
