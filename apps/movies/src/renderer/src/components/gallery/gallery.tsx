import { fetchMovies, selectPage, setPage } from '@renderer/features/movies/slice'
import { Movie } from '@renderer/features/movies/types'
import { useAppDispatch } from '@renderer/hooks'
import LoadMoreToast from '@renderer/components/gallery/load-more'
import { FC, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import GalleryContainer from './gallery-container'

interface Gallery {
  movies: Movie[]
}

const MovieGrid: FC<Gallery> = ({ movies }) => {
  const [isAtBottom, setIsAtBottom] = useState(false)

  const dispatch = useAppDispatch()
  const page = useSelector(selectPage)

  useEffect(() => {
    let isFetching = false
    const handleScroll = (): void => {
      if (isFetching) return

      const { scrollTop, scrollHeight, clientHeight } = document.documentElement

      if (scrollTop + clientHeight >= scrollHeight - 1 && scrollTop > 0) {
        setIsAtBottom(true)
        isFetching = true
        setTimeout(async () => {
          dispatch(setPage(page + 1))
          dispatch(fetchMovies())

          isFetching = false
        }, 2000)
      } else {
        setIsAtBottom(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isAtBottom])

  return (
    <>
      <GalleryContainer moviesList={movies} />
      {isAtBottom && <LoadMoreToast isAtBottom={isAtBottom} />}
    </>
  )
}

export default MovieGrid
