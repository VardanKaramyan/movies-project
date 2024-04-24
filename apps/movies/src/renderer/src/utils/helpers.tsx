import { Movie } from '@renderer/features/movies/types'
import noCover from '../assets/covers/no-cover.png'

export const getPosterPath = (posterPath: string | null | undefined): string => {
  const baseImageUrl = 'https://image.tmdb.org/t/p/w500'
  return posterPath ? `${baseImageUrl}/${posterPath}` : noCover
}

export const removeDuplicates = (movies: Movie[]): Movie[] => {
  return movies.filter((value, index, self) => self.findIndex((m) => m.id === value.id) === index)
}
