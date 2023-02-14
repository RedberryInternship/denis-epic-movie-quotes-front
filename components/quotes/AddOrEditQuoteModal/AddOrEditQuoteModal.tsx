import {
  Close,
  FormSubmitButton,
  MovieImageUploadInput,
  MovieInQuoteModal,
  MovieModalWrapper,
  MovieSelect,
  QuoteDeleteButton,
  QuoteImageEdit,
  SelfProfilePicture,
  TextAreaWithLanguage,
} from 'components';
import { MovieQuote } from 'types';
import { useAddOrEditQuoteModal } from './useAddOrEditQuoteModal';
import { PropsType } from './types';

const AddOrEditQuoteModal = (props: PropsType) => {
  const { handleSubmit, isLoading, deleteHandler } = useAddOrEditQuoteModal(
    props.isEditing,
    props.addingFromNewsfeed,
    props.closeModal,
    props.movie?.id,
    props.quoteID
  );

  return (
    <MovieModalWrapper
      title={
        props.addingFromNewsfeed
          ? 'Write New Quote'
          : props.isEditing
          ? 'Edit Quote'
          : 'Add Quote'
      }
      rightIcon={<Close />}
      onRightIconClick={props.closeModal}
      leftElement={
        props.isEditing ? (
          <QuoteDeleteButton onClick={deleteHandler} />
        ) : undefined
      }
    >
      <form className='-mr-2 lg:-mr-1 pl-1' onSubmit={handleSubmit}>
        <div className='flex items-center gap-4 -mt-1 mb-8'>
          <SelfProfilePicture size={60} />
          <span className='text-xl'>{props.user.username}</span>
        </div>
        {props.movie && <MovieInQuoteModal movie={props.movie} />}

        <div className='mt-4'>
          {!props.isEditing && !props.addingFromNewsfeed && (
            <MovieImageUploadInput isEditing={props.isEditing} />
          )}
        </div>

        <TextAreaWithLanguage
          name='body_en'
          placeholder='Create new quote'
          language='Eng'
        />
        <TextAreaWithLanguage
          name='body_ka'
          placeholder='ახალი ციტატა'
          language='ქარ'
        />

        {props.addingFromNewsfeed && (
          <>
            <MovieImageUploadInput isEditing={false} />
            <MovieSelect />
          </>
        )}

        {props.isEditing && (
          <QuoteImageEdit quote={props.quote as MovieQuote} />
        )}

        <div className='mt-6'>
          <FormSubmitButton
            label={
              props.addingFromNewsfeed
                ? 'Post'
                : props.isEditing
                ? 'Save Changes'
                : 'Add Quote'
            }
            isLoading={isLoading}
          />
        </div>
      </form>
    </MovieModalWrapper>
  );
};

export default AddOrEditQuoteModal;
