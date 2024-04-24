import MoonIcon from '@renderer/assets/icons/moon'
import SunIcon from '@renderer/assets/icons/sun'
import {
  searchMovies,
  fetchMoviesInit,
  selectLoadingAction,
  selectSearch,
  setSearch
} from '@renderer/features/movies/slice'
import { useAppDispatch } from '@renderer/hooks'
import { useEffect, useState } from 'react'
import { LoadingIndicator } from './spinners'
import { useSelector } from 'react-redux'
import toggleGlobalDarkMode from '@renderer/utils/dark-mode'

const Top = ({ withSearch = true }: { withSearch?: boolean }): JSX.Element => {
  const [darkMode, setDarkMode] = useState(false)
  const dispatch = useAppDispatch()
  const loadingAction = useSelector(selectLoadingAction)
  const search = useSelector(selectSearch)

  const toggleDarkMode = (): void => {
    toggleGlobalDarkMode()
    setDarkMode((prevMode) => !prevMode)
  }

  useEffect(() => {
    if (search === '') {
      dispatch(fetchMoviesInit())
    } else {
      dispatch(searchMovies())
    }
  }, [search])

  return (
    <div className="">
      {withSearch && (
        <div className="z-50 relative w-1/2 md:w-1/3 m-5">
          <LoadingIndicator loadingAction={loadingAction} />
          <input
            type="search"
            onChange={(e) => {
              setTimeout(() => {
                dispatch(setSearch(e.target.value))
              }, 1000)
            }}
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-fuchsia-800 focus:border-fuchsia-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-fuchsia-800 dark:focus:border-fuchsia-900"
            placeholder="Search for movies..."
            required
          />
        </div>
      )}

      <div>
        <div className="z-50 absolute top-0 right-0 m-5">
          <button
            onClick={toggleDarkMode}
            className="dark:bg-amber-500 dark:hover:bg-amber-300 bg-fuchsia-900 hover:bg-fuchsia-600 text-white font-bold py-2 px-4 rounded flex items-center"
          >
            {darkMode ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </div>
    </div>
  )
}
export default Top
