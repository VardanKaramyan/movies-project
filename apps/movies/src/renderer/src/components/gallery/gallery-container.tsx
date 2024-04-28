import { Movie } from '@renderer/features/movies/types'
import { getPosterPath } from '@renderer/utils/helpers'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
interface GalleryContainerProps {
  moviesList: Movie[]
}

const GalleryContainer: FC<GalleryContainerProps> = ({ moviesList }) => {
  const navigate = useNavigate()

  const handleGetDetails = async (id: number): Promise<void> => {
    navigate(`details/${id}`)
  }

  return (
    <div className="container mx-auto mt-4">
      <div className="grid-container flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-8 gap-y-7">
          {moviesList.map((movie) => {
            return (
              <div
                key={movie.id}
                className="shadow-lg hover:shadow-fuchsia-900 transition duration-300 ease-in-out hover:scale-105 cursor-pointer w-full max-w-sm bg-slate-100 border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
                onClick={() => handleGetDetails(movie.id)}
              >
                <img
                  className={`object-cover rounded-lg aspect-[4/6]`}
                  src={getPosterPath(movie.poster_path)}
                  alt="Gallery image"
                />

                <div className="dark:text-white mt-2 p-2">
                  <h3 className="text-lg font-semibold">{movie.title}</h3>
                  <p className="text-sm antialiased font-light leading-relaxed text-inherit dark:text-gray-300">
                    {movie.release_date}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default GalleryContainer
