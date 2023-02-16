import { useHandleSubmit } from 'hooks';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { ApiResponse, QuoteForm } from 'types';
import { useQueryClient } from 'react-query';

import {
  deleteQuote,
  sendAddQuoteRequest,
  sendEditQuoteRequest,
} from 'services';

export const useAddOrEditQuoteModal = (
  isEditing: boolean | undefined,
  addingFromNewsfeed: boolean | undefined,
  closeModal: () => void,
  movieID?: number,
  quoteID?: number
) => {
  const { setError } = useFormContext();

  const queryClient = useQueryClient();

  const [isLoading, setIsLoading] = useState(false);
  const onSubmitSuccess = async () => {
    closeModal();
    if (addingFromNewsfeed) {
      await queryClient.invalidateQueries({
        refetchPage: (page, index) => index === 0,
      });
    } else {
      await queryClient.refetchQueries(['movie', movieID]);
    }
  };
  const onSubmitError = (response: ApiResponse<QuoteForm>) => {
    if (response.errors) {
      for (const [fieldName, errors] of Object.entries<any>(response.errors))
        setError(fieldName, {
          type: 'custom',
          message: errors[0],
        });
    }
  };

  let submitRequest;
  if (isEditing) {
    submitRequest = (formValues: QuoteForm) =>
      sendEditQuoteRequest(quoteID as number, formValues);
  } else {
    submitRequest = (formValues: QuoteForm) =>
      sendAddQuoteRequest(movieID as number, formValues);
  }

  const handleSubmit = useHandleSubmit<QuoteForm>(
    submitRequest,
    onSubmitSuccess,
    onSubmitError,
    setIsLoading
  );

  const deleteHandler = async () => {
    await deleteQuote(quoteID as number);
    closeModal();
    await queryClient.refetchQueries(['movie', movieID]);
  };

  return {
    isLoading,
    handleSubmit,
    deleteHandler,
  };
};
