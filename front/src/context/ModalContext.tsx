import React, { useReducer, useContext, createContext, Dispatch } from 'react'
import Modal from '../components/Modal'

type State = {
  visible: boolean
  modal_type: string,
  message: string
}

type Action =
  | { type: 'SET_MODAL_TYPE'; modal_type: string }
  | { type: 'SET_MESSAGE'; message: string }
  | { type: 'SET_VISIBLE'; visible: boolean }

type ModalDispatch = Dispatch<Action>;

const ModalStateContext = createContext<State | null>(null)
const ModalDispatchContext = createContext<ModalDispatch | null>(null)

const Reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_MODAL_TYPE':
      return {
        ...state,
        modal_type: action.modal_type 
      }
    case 'SET_MESSAGE':
      return {
        ...state,
        message: action.message 
      }
    case 'SET_VISIBLE':
      return {
        ...state,
        visible: action.visible
      }
    default:
      throw new Error('Unhandled action')
  }
}

export function ModalProvider({ children }: { children: React.ReactNode }) {
  let [state, dispatch] = useReducer(Reducer, {
    modal_type: 'Normal',
    message: '',
    visible: false
  })

  return (
    <ModalStateContext.Provider value={state}>
      <ModalDispatchContext.Provider value={dispatch}>
        <Modal type={state.modal_type} visible={state.visible}>{state.message}</Modal>{children}
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  )
}

// state 와 dispatch 를 쉽게 사용하기 위한 커스텀 Hooks
export function useModalState() {
  const state = useContext(ModalStateContext)
  if (!state) throw new Error('Cannot find ModalProvider')
  return state
}

export function useModalDispatch() {
  const dispatch = useContext(ModalDispatchContext)
  if (!dispatch) throw new Error('Cannot find ModalProvider')
  return dispatch
}