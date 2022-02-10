/** Dependencies **/
import { configureStore } from '@reduxjs/toolkit';

/** Reducers **/
import authReducer from './auth/auth.reducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
