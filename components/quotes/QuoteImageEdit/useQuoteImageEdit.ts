import { ChangeEvent, DragEvent, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'next-i18next';

export const useQuoteImageEdit = () => {
  const { register, setValue } = useFormContext();
  const [uploadedImage, setUploadedImage] = useState('');

  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const image = event.target.files![0];

    if (image) {
      setUploadedImage(URL.createObjectURL(image));
      setValue('image', event.target.files![0]);
    }
  };

  const handleDrop = (event: DragEvent) => {
    event.preventDefault();
    const image = event.dataTransfer.items
      ? event.dataTransfer.items[0].getAsFile()
      : event.dataTransfer.files[0];

    setUploadedImage(URL.createObjectURL(image as File));
    setValue('image', [image]);
  };

  const { t } = useTranslation('common');

  return {
    register,
    uploadedImage,
    handleUpload,
    handleDrop,
    t,
  };
};
