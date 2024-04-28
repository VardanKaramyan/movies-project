import { FC } from 'react'
interface Props {
  message: string
}
const NoResultsMessage: FC<Props> = ({ message }) => {
  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center dark:text-white overlay">
      <p className="text-center text-3xl">{message}</p>
    </div>
  )
}

export default NoResultsMessage
