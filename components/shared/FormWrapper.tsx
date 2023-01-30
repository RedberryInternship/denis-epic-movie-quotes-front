import { PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const FormWrapper = (props: PropsWithChildren<{ defaultValues?: object }>) => {
  const form = useForm({
    mode: 'all',
    defaultValues: props.defaultValues,
  });

  return <FormProvider {...form}>{props.children}</FormProvider>;
};

export default FormWrapper;
