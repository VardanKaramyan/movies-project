import { selectLoadingAction, setSearch } from '@renderer/features/movies/slice'
import { useAppDispatch } from '@renderer/hooks'
import { LoadingIndicator } from '@renderer/utils/spinners'
import { useSelector } from 'react-redux'

const Search = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const loadingAction = useSelector(selectLoadingAction)
  return (
    <div className="z-50 absolute top-0 left-0 m-5 lg:w-1/3 xl:w-1/3 xlg:w-1/3 md:w-1/2 sm:w-3/4 w-3/4">
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
  )
}

export default Search
