import { useEffect } from 'react'
import { useAppDispatch } from '../hooks'
import {
  clearMovieDetails,
  fetchMovies,
  selectMovies,
  selectSearch
} from '../features/movies/slice'
import Gallery from '@renderer/components/gallery'
import ToastComponent from '@renderer/utils/error'
import { useSelector } from 'react-redux'
import NoResultsMessage from '@renderer/components/no-result'
import { LoadingSpinner } from '@renderer/components/spinners'

export default function Root(): JSX.Element {
  const movies = useSelector(selectMovies)
  const search = useSelector(selectSearch)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchMovies())
    dispatch(clearMovieDetails())
  }, [dispatch])

  return (
    <>
      <ToastComponent />
      {movies.length > 0 ? (
        <Gallery movies={movies} />
      ) : search ? (
        <NoResultsMessage message="No movies found" />
      ) : (
        <LoadingSpinner />
      )}
    </>
  )
}
