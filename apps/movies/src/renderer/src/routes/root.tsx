import { useEffect } from 'react'
import { useAppDispatch } from '../hooks'
import {
  clearMovieDetails,
  fetchMoviesInit,
  searchMovies,
  selectMovieDetails,
  selectMovies,
  selectSearch
} from '../features/movies/slice'
import ToastComponent from '@renderer/utils/error'
import { useSelector } from 'react-redux'
import NoResultsMessage from '@renderer/components/no-result'
import Gallery from '@renderer/components/gallery/gallery'
import { LoadingSpinner } from '@renderer/utils/spinners'

export default function Root(): JSX.Element {
  const movies = useSelector(selectMovies)
  const movieDetails = useSelector(selectMovieDetails)
  const search = useSelector(selectSearch)

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (search === '') {
      dispatch(fetchMoviesInit())
    } else {
      dispatch(searchMovies())
    }
    if (movieDetails) dispatch(clearMovieDetails())
  }, [search, dispatch])

  if (movies.length === 0) {
    return search ? <NoResultsMessage message="No movies found" /> : <LoadingSpinner />
  }

  return (
    <>
      <ToastComponent />
      <Gallery movies={movies} />
    </>
  )
}
