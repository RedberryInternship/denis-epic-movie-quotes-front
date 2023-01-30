import { useState } from 'react';
import { useRouter } from 'next/router';
import { useFormContext, useFormState } from 'react-hook-form';
import { ApiResponse, ProfileForm } from 'types';
import { useQueryClient } from 'react-query';
import { sendUpdateProfileRequest } from 'services';

export const useProfileForm = () => {
  const [isEditingImage, setIsEditingImage] = useState(false);
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);

  const disableEditing = () => {
    setIsEditingImage(false);
    setIsEditingUsername(false);
    setIsEditingPassword(false);
  };

  const router = useRouter();
  const goBack = router.back;

  const { handleSubmit, setError } = useFormContext<ProfileForm>();

  const { dirtyFields } = useFormState<ProfileForm>();

  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();

  const onSubmit = async (formData: ProfileForm) => {
    const changedFields = Object.fromEntries(
      Object.keys(dirtyFields).map((key) => [
        key,
        formData[key as keyof ProfileForm],
      ])
    );

    setIsLoading(true);
    const response = (await sendUpdateProfileRequest(
      changedFields as ProfileForm
    )) as ApiResponse<ProfileForm>;
    setIsLoading(false);

    if (response.errors) {
      for (const [fieldName, errors] of Object.entries<any>(response.errors))
        setError(fieldName as keyof ProfileForm, {
          type: 'custom',
          message: errors[0],
        });
    } else {
      await queryClient.refetchQueries('user');
      disableEditing();
    }
  };

  return {
    handleSubmit: handleSubmit(onSubmit),
    setIsEditingImage,
    isEditingImage,
    setIsEditingUsername,
    isEditingUsername,
    setIsEditingPassword,
    isEditingPassword,
    isLoading,
    disableEditing,
    goBack,
  };
};
