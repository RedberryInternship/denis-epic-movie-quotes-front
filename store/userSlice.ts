import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserFromDatabase } from 'types';

const initialState: User = {
  id: 0,
  username: '',
  emails: [],
  isGoogleUser: false,
  profilePicture: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserFromDatabase>) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      action.payload.emails.sort((a) => (a.is_primary ? -1 : 1));
      state.emails = action.payload.emails.map((email) => {
        return {
          id: email.id,
          address: email.address,
          isVerified: Boolean(email.verified_at),
          isPrimary: Boolean(email.is_primary),
        };
      });
      state.profilePicture = action.payload.profile_picture;
      state.isGoogleUser = Boolean(action.payload.google_id);
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
