import { ChangeEvent, useState } from 'react';
import { useFormContext } from 'react-hook-form';

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

  return {
    register,
    uploadedImage,
    handleUpload,
  };
};
