import { FC } from 'react'

interface BackButtonProps {
  handleGoBack: () => void
}

const BackButton: FC<BackButtonProps> = ({ handleGoBack }) => {
  return (
    <button
      onClick={handleGoBack}
      className="ml-7 flex flex-row items-center justify-center text-gray-600  dark:text-gray-400 hover:text-black focus:outline-none dark:hover:text-gray-200"
    >
      <svg
        className="h-16 w-16"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M8.293 7.293a1 1 0 011.414 1.414L6.414 12l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  )
}

export default BackButton
