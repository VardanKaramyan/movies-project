import Search from './search'
import BackButton from './go-back-button'
import ThemeToggle from './theme-toggle'
import { FC, Fragment } from 'react'

interface TopProps {
  withSearch?: boolean
}

const Top: FC<TopProps> = ({ withSearch = true }: TopProps) => {
  return (
    <Fragment>
      {withSearch ? <Search /> : <BackButton />}
      <ThemeToggle />
    </Fragment>
  )
}
export default Top
