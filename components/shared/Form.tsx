import { PropsWithChildren } from 'react';

const Form = (props: PropsWithChildren<{ onSubmit: () => void }>) => {
  return (
    <form
      className='w-full flex flex-col items-center gap-1'
      onSubmit={props.onSubmit}
    >
      {props.children}
    </form>
  );
};

export default Form;
