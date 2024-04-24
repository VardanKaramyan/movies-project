import { FC } from 'react'
import { MovieDetails } from '../features/movies/types'
import { getPosterPath } from '@renderer/utils/helpers'
import { GenreList } from './utils'
import StarIcon from '@renderer/assets/icons/star'
interface MovieDetailsProps {
  movie: MovieDetails
}

const MovieDetailsCard: FC<MovieDetailsProps> = ({ movie }) => {
  return (
    <>
      <div className="container mx-auto mt-6">
        <div className="grid grid-cols-1">
          <div className="bg-slate-100 rounded-lg dark:bg-gray-800">
            <div className="flex flex-col md:flex-row">
              <div className="flex-none xlg:w-1/3 2xlg:w-1/3 w-full md:w-1/2 lg:w-1/3">
                <img
                  className="w-full h-auto rounded-t-lg md:rounded-l-lg aspect-[4/6]"
                  src={getPosterPath(movie.poster_path)}
                  alt="Movie poster"
                />
              </div>
              <div className="h-250 w-full gap-5 p-4 content-between grid">
                <div className="">
                  <h5 className="mb-2 text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold leading-tight text-gray-900 dark:text-gray-200">
                    {movie?.title}
                  </h5>
                  <p className="mb-4 text-xl lg:text-xl xl:text-2xl 2xl:text-2xl leading-relaxed text-gray-700 dark:text-gray-300 md:pr-0 pr-16">
                    {movie?.overview}
                  </p>
                </div>

                <div className="">
                  {movie.budget > 0 && (
                    <div className="text-gray-600 dark:text-gray-400">
                      <p className="font-semibold text-l lg:text-xl xl:text-2xl 2xl:text-2xl">
                        Budget:
                        <span className="ml-2 font-semibold text-black dark:text-white">
                          {movie.budget.toLocaleString()}$
                        </span>
                      </p>
                    </div>
                  )}
                  <div className="flex items-center mt-0 lg:mt-1 xl:mt-6 2xl:mt-6">
                    <p className="mr-2 font-semibold text-gray-600 dark:text-gray-400 text-l lg:text-xl xl:text-2xl 2xl:text-2xl">
                      Vote Average
                    </p>
                    <StarIcon />
                    <p className="font-bold text-gray-900 dark:text-white text-l lg:text-xl xl:text-2xl 2xl:text-2xl">
                      {movie.vote_average}
                    </p>
                    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                    <div className="font-medium text-gray-900 dark:text-white text-l lg:text-2xl xl:text-2xl 2xl:text-2xl">
                      {movie.vote_count} Votes
                    </div>
                  </div>
                  <div className="lg:mt-1 xl:mt-6 m:mt-1 text-l lg:text-xl xl:text-2xl 2xl:text-2xl ">
                    <p className="font-semibold text-gray-600 dark:text-gray-400">
                      Release Date:
                      <span className="ml-2 font-semibold text-black dark:text-white">
                        {movie.release_date}
                      </span>
                    </p>
                  </div>
                  <div className="lg:mt-1 mt-0 xl:mt-1 m:mt-1 2xl:mt1">
                    <span className="ml-2">{GenreList({ genres: movie.genres })}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieDetailsCard
