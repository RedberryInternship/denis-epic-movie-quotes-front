import { PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodSchema } from 'zod';

const FormWrapper = (
  props: PropsWithChildren<{ schema?: ZodSchema; defaultValues?: object }>
) => {
  const form = useForm({
    mode: 'all',
    resolver: props.schema && zodResolver(props.schema),
    defaultValues: props.defaultValues,
  });

  return <FormProvider {...form}>{props.children}</FormProvider>;
};

export default FormWrapper;
