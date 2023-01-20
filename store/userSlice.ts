import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserFromDatabase } from 'types';

const initialState: User = {
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
      state.username = action.payload.username;
      state.emails = action.payload.emails.map((email) => {
        return {
          address: email.address,
          isVerified: Boolean(email.verified_at),
          isPrimary: email.is_primary,
        };
      });
      state.profilePicture = action.payload.profile_picture;
      state.isGoogleUser = Boolean(action.payload.google_id);
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
