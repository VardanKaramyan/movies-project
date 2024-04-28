import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './features/movies/slice'
import errorReducer from './features/errors/slice'

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    error: errorReducer
  }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
