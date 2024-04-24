import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getMovieData, getMovieDetails, searchMovie } from 'tmdb-sdk'
import { MoviesState } from './types'
import { setError } from '../errors/slice'
import { RootState } from '@renderer/store'
import { removeDuplicates } from '@renderer/utils/helpers'

const initialState: MoviesState = {
  movies: [],
  movieDetails: null,
  loading: false,
  loadingAction: false,
  error: null,
  search: '',
  page: 1
}

export const fetchMoviesInit = createAsyncThunk(
  'movies/fetchMoviesInit',
  async (_, { rejectWithValue }) => {
    try {
      const res = await getMovieData(1)
      return res
    } catch (error) {
      setError(error)
      return rejectWithValue(error)
    }
  }
)

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (_, { rejectWithValue, getState }) => {
    const page = (getState() as RootState).movies.page

    try {
      const res = await getMovieData(page)
      return res
    } catch (error) {
      setError(error)
      return rejectWithValue(error)
    }
  }
)

export const searchMovies = createAsyncThunk(
  'movies/searchMovies',
  async (_, { getState, rejectWithValue }) => {
    const search = (getState() as RootState).movies.search

    try {
      const res = await searchMovie(search)
      return res
    } catch (error) {
      setError(error)
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
      setError(error)
      return rejectWithValue(error)
    }
  }
)

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload
    },
    setSearch: (state, action) => {
      state.search = action.payload
      state.page = 1
    },
    setPage: (state, action) => {
      state.page = action.payload
    },
    clearMovieDetails: (state) => {
      state.movieDetails = null
    },
    clearMovieList: (state) => {
      state.movies = []
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
        state.movies = removeDuplicates([...state.movies, ...action.payload.results])
        state.page++
      })
      .addCase(fetchMoviesInit.fulfilled, (state, action) => {
        state.loading = false
        state.movies = action.payload.results
        state.page = 2
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
  },
  selectors: {
    selectMovies: (state: MoviesState) => state.movies,
    selectMovieDetails: (state: MoviesState) => state.movieDetails,
    selectLoading: (state: MoviesState) => state.loading,
    selectLoadingAction: (state: MoviesState) => state.loadingAction,
    selectPage: (state: MoviesState) => state.page,
    selectSearch: (state: MoviesState) => state.search,
    selectError: (state: MoviesState) => state.error
  }
})

// Action creators are generated for each case reducer function
export const { setMovies, setPage, clearMovieDetails, clearMovieList, setSearch } =
  moviesSlice.actions
export const {
  selectMovies,
  selectMovieDetails,
  selectLoading,
  selectLoadingAction,
  selectError,
  selectSearch,
  selectPage
} = moviesSlice.selectors

export default moviesSlice.reducer
