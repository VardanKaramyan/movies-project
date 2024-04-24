import { createSlice, createSelector } from '@reduxjs/toolkit'

export interface ErrorState {
  message: { message: string } | null
}

export const errorSlice = createSlice({
  name: 'error',
  initialState: { message: null } satisfies ErrorState as ErrorState,
  reducers: {
    setError: (state, action) => {
      state.message = action.payload
    },
    clearError: (state) => {
      state.message = null
    }
  },
  selectors: {
    selectErrorMessage: (state: ErrorState) => state.message,
    hasError: createSelector(
      (state: ErrorState) => state.message,
      (message) => message !== null
    )
  }
})

export const { setError, clearError } = errorSlice.actions

export const { selectErrorMessage, hasError } = errorSlice.selectors

export default errorSlice.reducer
