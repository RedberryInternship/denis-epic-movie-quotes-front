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
import { useAddOrEditMovieModal } from './useAddOrEditMovieModal';
import { PropsType } from './types';

const AddOrEditMovieModal = (props: PropsType) => {
  const { handleSubmit, isLoading, t } = useAddOrEditMovieModal(
    props.isEditing,
    props.closeModal,
    props.movieID
  );

  return (
    <MovieModalWrapper
      title={props.isEditing ? t('edit_movie') : t('add_movie')}
      rightIcon={<Close />}
      onRightIconClick={props.closeModal}
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
          placeholder={t('movie_name_en')}
          language='Eng'
        />
        <InputWithLanguage
          name='title_ka'
          placeholder={t('movie_name_ka')}
          language='ქარ'
        />

        <GenreSelect genres={props.genres} />

        <InputWithLanguage
          name='director_en'
          placeholder={t('director_name_en')}
          language='Eng'
        />
        <InputWithLanguage
          name='director_ka'
          placeholder={t('director_name_ka')}
          language='ქარ'
        />

        <TextAreaWithLanguage
          name='description_en'
          placeholder={t('description_en')}
          language='Eng'
        />
        <TextAreaWithLanguage
          name='description_ka'
          placeholder={t('description_ka')}
          language='ქარ'
        />

        <MovieTextInput
          name='release_year'
          placeholder={t('release_year')}
          validationRules={{
            validate: {
              validYear: (value: number) =>
                (value > 1888 && value <= new Date().getFullYear()) ||
                t('validation:invalid_release_year'),
            },
            pattern: {
              value: /^[0-9]+$/,
              message: t('validation:number'),
            },
          }}
        />

        <MovieTextInput
          name='budget'
          placeholder={t('budget_placeholder')}
          validationRules={{
            pattern: {
              value: /^[0-9]+$/,
              message: t('validation:number'),
            },
          }}
        />

        <MovieImageUploadInput isEditing={props.isEditing} />

        <div className='mt-1'>
          <FormSubmitButton
            label={props.isEditing ? t('update_movie') : t('add_movie')}
            isLoading={isLoading}
          />
        </div>
      </form>
    </MovieModalWrapper>
  );
};

export default AddOrEditMovieModal;
