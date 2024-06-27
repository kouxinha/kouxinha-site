// redux
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';
import logger from 'redux-logger';

interface AppState {
  posPageTitle: string;
  pageTitle: string;
}

const initialState: AppState = {
  posPageTitle: 'Kouxinha',
  pageTitle: '',
};

const titleSlice = createSlice({
  name: 'page title',
  initialState,
  reducers: {
    setPageTitle: (state, action) => {
      state.pageTitle = action.payload;
      document.title = `${state.pageTitle} - ${state.posPageTitle}`;
    },
  },
});

export const { setPageTitle } = titleSlice.actions;

const store = configureStore({
  reducer: {
    app: titleSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
