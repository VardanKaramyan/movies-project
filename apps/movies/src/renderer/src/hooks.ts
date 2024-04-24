import { useDispatch } from 'react-redux'
import type { AppDispatch } from './store'

// Use this hook instead of plane useDispatch
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()
