import noCover from '../assets/no-cover.png'

export const getPosterPath = (posterPath: string | null | undefined): string => {
  const baseImageUrl = 'https://image.tmdb.org/t/p/w500'
  return posterPath ? `${baseImageUrl}/${posterPath}` : noCover
}
