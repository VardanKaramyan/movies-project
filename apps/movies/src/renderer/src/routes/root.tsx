import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchMovies } from '../features/movies/slice'
import { Movie } from '../features/movies/types'
import Gallery from '@renderer/components/gallery'

export default function Root(): JSX.Element {
  const moviesData = useAppSelector((state) => state.movies.movies)
  const [movies, setMovies] = useState<Movie[]>(moviesData)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchMovies())
  }, [])

  useEffect(() => {
    setMovies(moviesData)
  }, [moviesData])

  return <Gallery movies={movies} />
}
