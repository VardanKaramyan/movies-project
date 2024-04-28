import { Genre, Movie } from '@renderer/features/movies/types'
import noCover from '../assets/covers/no-cover.png'

export const getPosterPath = (posterPath: string | null | undefined): string => {
  const baseImageUrl = 'https://image.tmdb.org/t/p/w500'
  return posterPath ? `${baseImageUrl}/${posterPath}` : noCover
}

export const removeDuplicates = (movies: Movie[]): Movie[] => {
  return movies.filter((value, index, self) => self.findIndex((m) => m.id === value.id) === index)
}

export const GenreList = ({ genres }: { genres: Genre[] }): JSX.Element => {
  return (
    <div className="text-lg">
      <span className="font-semibold text-gray-600 dark:text-gray-400">Genres:</span>
      {genres.map((genre) => (
        <span key={genre.id} className="link font-semibold text-black dark:text-white ml-2">
          {genre.name}
        </span>
      ))}
    </div>
  )
}
