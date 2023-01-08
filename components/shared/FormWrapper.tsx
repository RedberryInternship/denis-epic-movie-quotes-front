import { PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const FormWrapper = (props: PropsWithChildren) => {
  const form = useForm({
    mode: 'all',
  });

  return <FormProvider {...form}>{props.children}</FormProvider>;
};

export default FormWrapper;
