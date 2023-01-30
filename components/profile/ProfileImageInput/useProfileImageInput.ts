import { useFormContext, useWatch } from 'react-hook-form';
import { ChangeEvent, useEffect, useState } from 'react';
import { SetState } from 'types';

export const useProfileImageInput = (setIsEditingImage: SetState<boolean>) => {
  const { register } = useFormContext();

  const [uploadedImage, setUploadedImage] = useState('');

  const imageValue = useWatch({ name: 'image' });

  useEffect(() => {
    if (!imageValue) {
      setUploadedImage('');
    }
  }, [imageValue]);

  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const image = event.target.files![0];
    if (image) {
      setUploadedImage(URL.createObjectURL(image));
      setIsEditingImage(true);
    }
  };

  return {
    register,
    uploadedImage,
    handleUpload,
  };
};
