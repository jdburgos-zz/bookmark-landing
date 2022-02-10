/** Dependencies **/
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/** Interfaces **/
import { IUser } from '@interfaces/user.interface';

export interface AuthState {
  user: IUser | null;
}

let user;

if (typeof window !== 'undefined') {
  // @ts-ignore
  user = JSON.parse(localStorage.getItem('user'));
}

const initialAuthState: AuthState = { user };

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    setUser(state: AuthState, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
    logoutFn(state: AuthState, action: PayloadAction<null>) {
      state.user = action.payload;
    },
  },
});

export const { setUser, logoutFn } = authSlice.actions;

export default authSlice.reducer;
