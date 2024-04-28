import MoonIcon from '@renderer/assets/icons/moon'
import SunIcon from '@renderer/assets/icons/sun'
import toggleGlobalDarkMode from '@renderer/utils/dark-mode'
import { FC, useState } from 'react'

const ThemeToggle: FC = () => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = (): void => {
    toggleGlobalDarkMode()
    setDarkMode((prevMode) => !prevMode)
  }
  return (
    <div className="z-50 absolute top-[1px] right-0 m-5">
      <button
        onClick={toggleDarkMode}
        className="dark:bg-amber-500 h-[52px] dark:hover:bg-amber-300 bg-fuchsia-900 hover:bg-fuchsia-600 text-white font-bold py-2 px-4 rounded flex items-center"
      >
        {darkMode ? <MoonIcon /> : <SunIcon />}
      </button>
    </div>
  )
}

export default ThemeToggle
