import { Genre } from '@renderer/features/movies/types'

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
