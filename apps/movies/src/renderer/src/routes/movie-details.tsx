import { useParams } from 'react-router-dom'
import { clearMovieDetails, fetchMovieDetails } from '@renderer/features/movies/slice'
import { useAppDispatch, useAppSelector } from '@renderer/hooks'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import BackButton from '@renderer/components/go-back-button'
import MovieDetailsCard from '@renderer/components/details-card'
import { LoadingSpinner } from '@renderer/components/spinners'

const SingleMoviePage = (): JSX.Element => {
  const { id } = useParams()
  const movie = useAppSelector((state) => state.movies.movieDetails)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!movie && id) dispatch(fetchMovieDetails(+id))
  }, [id, movie, dispatch])

  if (!movie) return <LoadingSpinner />

  const handleGoBack = (): void => {
    navigate('/')
    dispatch(clearMovieDetails())
  }

  return (
    <>
      <BackButton handleGoBack={handleGoBack} />

      <MovieDetailsCard movie={movie} />
    </>
  )
}

export default SingleMoviePage
