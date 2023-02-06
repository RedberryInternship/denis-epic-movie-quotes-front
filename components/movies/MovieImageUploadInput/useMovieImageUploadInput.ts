import { useFormContext, useFormState, useWatch } from 'react-hook-form';
import { DragEvent } from 'react';

export const useMovieImageUploadInput = () => {
  const { register, setValue } = useFormContext();
  const imageValue = useWatch({ name: 'image' });

  const handleDrop = (event: DragEvent) => {
    event.preventDefault();
    const image = event.dataTransfer.items
      ? event.dataTransfer.items[0].getAsFile()
      : event.dataTransfer.files[0];

    setValue('image', [image]);
  };

  const { errors } = useFormState({ name: 'image' });

  return { register, imageValue, handleDrop, hasErrors: errors['image'] };
};
