import { createSlice } from '@reduxjs/toolkit';

interface UserProfile {
  username: string;
  password: string;
}

interface LoginState {
  isAuthenticated: boolean;
  profile: UserProfile;
}

const profile: UserProfile = {
  username: '',
  password: '',
};

const initialState: LoginState = {
  isAuthenticated: false,
  profile,
};

const global = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { actions, reducer } = global;
