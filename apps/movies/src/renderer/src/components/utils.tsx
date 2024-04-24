import { Genre } from '@renderer/features/movies/types'

export const GenreList = ({ genres }: { genres: Genre[] }): JSX.Element => {
  return (
    <div className="text-1xl lg:text-xl xl:text-2xl">
      <span className="font-semibold text-gray-600 dark:text-gray-400">Genres:</span>
      {genres.map((genre) => (
        <a key={genre.id} className="link lg:text-xl font-semibold text-black dark:text-white ml-2">
          {genre.name}
        </a>
      ))}
    </div>
  )
}
