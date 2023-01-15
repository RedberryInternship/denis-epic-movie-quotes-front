import { PropsWithChildren } from 'react';

const InputIconWrapper = (props: PropsWithChildren) => {
  return (
    <div className='absolute top-0 h-full right-4 flex items-center'>
      {props.children}
    </div>
  );
};

export default InputIconWrapper;
