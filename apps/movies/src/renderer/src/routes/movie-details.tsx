import { useParams } from 'react-router-dom'
import { fetchMovieDetails, selectMovieDetails } from '@renderer/features/movies/slice'
import { useAppDispatch } from '@renderer/hooks'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import BackButton from '@renderer/components/go-back-button'
import MovieDetailsCard from '@renderer/components/details-card'
import { LoadingSpinner } from '@renderer/components/spinners'
import { useSelector } from 'react-redux'

const SingleMoviePage = (): JSX.Element => {
  const { id } = useParams()
  const movieDetails = useSelector(selectMovieDetails)

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!movieDetails && id) dispatch(fetchMovieDetails(+id))
  }, [id, movieDetails, dispatch])

  if (!movieDetails) return <LoadingSpinner />

  const handleGoBack = (): void => {
    navigate('/')
  }

  return (
    <>
      <BackButton handleGoBack={handleGoBack} />
      <MovieDetailsCard movie={movieDetails} />
    </>
  )
}

export default SingleMoviePage
