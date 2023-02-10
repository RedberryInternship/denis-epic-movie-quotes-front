import { MovieQuote } from 'types';

export type QuoteModalsReducerState = {
  isEditingMovie?: boolean;
  quote?: MovieQuote;
  modalType?: 'add' | 'view' | 'edit' | 'options';
};

export type QuoteModalsReducerAction = {
  type: 'close' | 'edit_movie' | 'quote';
  quoteID?: number;
  modalType?: 'add' | 'view' | 'edit' | 'options';
};
