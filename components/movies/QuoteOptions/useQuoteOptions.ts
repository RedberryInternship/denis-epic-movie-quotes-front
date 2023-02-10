import { Dispatch, useRef } from 'react';
import { useOutsideClickListener } from 'hooks';
import { useQueryClient } from 'react-query';
import { deleteQuote } from 'services';
import { QuoteModalsReducerAction } from 'types';

export const useQuoteOptions = (
  id: number,
  movieID: number,
  dispatchActiveModal: Dispatch<QuoteModalsReducerAction>
) => {
  const closeOptions = () => dispatchActiveModal({ type: 'close' });
  const optionsRef = useRef(null);
  useOutsideClickListener(optionsRef, closeOptions);

  const queryClient = useQueryClient();

  const deleteHandler = async () => {
    await deleteQuote(id);
    await queryClient.refetchQueries(['movie', movieID]);
  };

  const viewHandler = () => {
    closeOptions();
    dispatchActiveModal({ type: 'quote', quoteID: id, modalType: 'view' });
  };

  const editHandler = () => {
    closeOptions();
    dispatchActiveModal({ type: 'quote', quoteID: id, modalType: 'edit' });
  };

  return {
    optionsRef,
    deleteHandler,
    viewHandler,
    editHandler,
  };
};
