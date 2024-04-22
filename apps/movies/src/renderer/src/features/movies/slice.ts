import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getMovieData, getMovieDetails, searchMovie } from 'tmdb-sdk'
import { MoviesState } from './types'

const initialState: MoviesState = {
  movies: [],
  movieDetails: null,
  loading: false,
  loadingAction: false,
  error: null
}

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (_, { rejectWithValue }) => {
    try {
      const res = await getMovieData()
      return res
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const searchMovies = createAsyncThunk(
  'movies/searchMovies',
  async (query: string, { rejectWithValue }) => {
    try {
      const res = await searchMovie(query)
      return res
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const fetchMovieDetails = createAsyncThunk(
  'movies/fetchMovieDetails',
  async (id: number, { rejectWithValue }) => {
    try {
      const res = await getMovieDetails(id)
      return res
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload.results
    },
    clearMovieDetails: (state) => {
      state.movieDetails = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false
        state.movies = action.payload.results
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || 'Error fetching movies'
      })
      .addCase(searchMovies.pending, (state) => {
        state.loadingAction = true
        state.error = null
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.loadingAction = false
        state.movies = action.payload.results
      })
      .addCase(searchMovies.rejected, (state, action) => {
        state.loadingAction = false
        state.error = action.payload || 'Error Searching movies'
      })
      .addCase(fetchMovieDetails.pending, (state) => {
        state.loadingAction = true
        state.error = null
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.loadingAction = false
        state.movieDetails = action.payload
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.loadingAction = false
        state.error = action.payload || 'Error Searching movies'
      })
  }
})

// Action creators are generated for each case reducer function
export const { setMovies, clearMovieDetails } = moviesSlice.actions

export default moviesSlice.reducer
