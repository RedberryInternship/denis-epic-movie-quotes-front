import {
  Close,
  FormSubmitButton,
  GenreSelect,
  InputWithLanguage,
  MovieImageUploadInput,
  MovieModalWrapper,
  MovieTextInput,
  SelfProfilePicture,
  TextAreaWithLanguage,
} from 'components';
import { Genre, SetState, User } from 'types';
import { useAddOrEditMovieModal } from './useAddOrEditMovieModal';

const AddOrEditMovieModal = (props: {
  user: User;
  genres: Genre[];
  setModalIsOpen: SetState<boolean>;
  isEditing?: boolean;
  movieID?: number;
}) => {
  const { handleSubmit, isLoading } = useAddOrEditMovieModal(
    props.isEditing,
    props.setModalIsOpen,
    props.movieID
  );

  return (
    <MovieModalWrapper
      title={props.isEditing ? 'Edit Movie' : 'Add Movie'}
      rightIcon={<Close />}
      onRightIconClick={() => props.setModalIsOpen(false)}
    >
      <form onSubmit={handleSubmit}>
        <div className='flex gap-4 text-xl items-center mb-9 lg:mb-7'>
          <SelfProfilePicture
            size={60}
            classNames='w-10 h-10 lg:w-15 lg:h-15'
          />
          {props.user.username}
        </div>
        <InputWithLanguage
          name='title_en'
          placeholder='Movie name'
          language='Eng'
        />
        <InputWithLanguage
          name='title_ka'
          placeholder='ფილმის სახელი'
          language='ქარ'
        />

        <GenreSelect genres={props.genres} />

        <InputWithLanguage
          name='director_en'
          placeholder='Director'
          language='Eng'
        />
        <InputWithLanguage
          name='director_ka'
          placeholder='რეჟისორი'
          language='ქარ'
        />

        <TextAreaWithLanguage
          name='description_en'
          placeholder='Movie description'
          language='Eng'
        />
        <TextAreaWithLanguage
          name='description_ka'
          placeholder='ფილმის აღწერა'
          language='ქარ'
        />

        <MovieTextInput
          name='release_year'
          placeholder='Release year'
          displayErrors={true}
          validationRules={{
            validate: {
              validYear: (value: number) =>
                (value > 1888 && value <= new Date().getFullYear()) ||
                'Please enter a valid release year',
            },
            pattern: {
              value: /^[0-9]+$/,
              message: 'Please enter a number',
            },
          }}
        />

        <MovieImageUploadInput isEditing={props.isEditing} />

        <div className='mt-1'>
          <FormSubmitButton
            label={props.isEditing ? 'Update Movie' : 'Add Movie'}
            isLoading={isLoading}
          />
        </div>
      </form>
    </MovieModalWrapper>
  );
};

export default AddOrEditMovieModal;
