import { FC } from 'react'
import { MovieDetails } from '../../features/movies/types'
import { getPosterPath } from '@renderer/utils/helpers'
import DetailsContainer from './details-container'

interface MovieDetailsProps {
  movie: MovieDetails
}

const MovieDetailsCard: FC<MovieDetailsProps> = ({ movie }) => {
  return (
    <div className="container mx-auto">
      <div className="bg-slate-100 rounded-lg dark:bg-gray-800">
        <div className="flex flex-col md:flex-row">
          <div className="flex-none xlg:w-1/3 2xlg:w-1/3 w-full md:w-1/2 lg:w-1/3">
            <img
              className="w-full h-auto rounded-t-lg md:rounded-l-lg aspect-[4/6]"
              src={getPosterPath(movie.poster_path)}
              alt="Movie poster"
            />
          </div>

          <DetailsContainer movie={movie} />
        </div>
      </div>
    </div>
  )
}

export default MovieDetailsCard
