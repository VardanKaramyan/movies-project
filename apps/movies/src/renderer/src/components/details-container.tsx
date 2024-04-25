import { FC } from 'react'
import { MovieDetails } from '@renderer/features/movies/types'
import { GenreList } from './utils'
import StarIcon from '@renderer/assets/icons/star'

interface DetailsContainerProps {
  movie: MovieDetails
}

const DetailsContainer: FC<DetailsContainerProps> = ({ movie }) => {
  return (
    <div className="h-250 w-full gap-5 p-6 content-between grid">
      <div>
        <h5 className="mb-4 text-2xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-semibold leading-tight text-gray-900 dark:text-gray-200">
          {movie?.title}
        </h5>
        <p className="mb-4 text-xl leading-relaxed text-gray-700 dark:text-gray-300 xl:pr-16">
          {movie?.overview}
        </p>
      </div>
      <div>
        {movie.budget > 0 && (
          <div className="text-gray-600 dark:text-gray-400 ">
            <span className="font-semibold text-lg">Budget:</span>
            <span className="ml-2 font-semibold text-black dark:text-white">
              {movie.budget.toLocaleString()}$
            </span>
          </div>
        )}
        <div className="flex items-center">
          <p className="mr-2 font-semibold text-gray-600 dark:text-gray-400 text-lg">
            Vote Average:
          </p>
          <StarIcon />
          <p className="font-bold text-gray-900 dark:text-white text-lg">{movie.vote_average}</p>
          <span className="w-1 h-1 bg-gray-500 rounded-full dark:bg-gray-400 ml-2 mr-2"></span>
          <div className="font-medium text-gray-900 dark:text-white text-lg">
            {movie.vote_count} Votes
          </div>
        </div>
        <div className="text-lg">
          <p className="font-semibold text-gray-600 dark:text-gray-400">
            Release Date:
            <span className="ml-2 font-semibold text-black dark:text-white">
              {movie.release_date}
            </span>
          </p>
        </div>
        <div className="">
          <span className="ml-2">{GenreList({ genres: movie.genres })}</span>
        </div>
      </div>
    </div>
  )
}

export default DetailsContainer
