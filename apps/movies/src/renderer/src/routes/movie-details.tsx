import { useParams } from 'react-router-dom'
import { fetchMovieDetails, selectMovieDetails } from '@renderer/features/movies/slice'
import { useAppDispatch } from '@renderer/hooks'
import { useEffect } from 'react'
import MovieDetailsCard from '@renderer/components/details/details-card'

import { useSelector } from 'react-redux'
import { LoadingSpinner } from '@renderer/utils/spinners'

const MovieDetails = (): JSX.Element => {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const movieDetails = useSelector(selectMovieDetails)

  useEffect(() => {
    if (!movieDetails && id) dispatch(fetchMovieDetails(+id))
  }, [id, movieDetails, dispatch])

  if (!movieDetails) return <LoadingSpinner />

  return (
    <>
      <MovieDetailsCard movie={movieDetails} />
    </>
  )
}

export default MovieDetails
