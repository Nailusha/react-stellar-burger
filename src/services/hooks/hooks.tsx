import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, DispatchFunc, RootState } from '../../utils/types'
import { useRef } from 'react';
import { wsConnecting, wsMessage } from '../store/reducers/socket/actions';



export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

