import React, { useReducer, useContext, createContext, Dispatch } from 'react'

type State = {
  token: string
}

type Action =
  | { type: 'SET_TOKEN'; token: string }

type TokenDispatch = Dispatch<Action>

const TokenStateContext = createContext<State | null>(null)
const TokenDispatchContext = createContext<TokenDispatch | null>(null)

const Reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token 
      }
    default:
      throw new Error('Unhandled action')
  }
}

export const TokenProvider = ({ children }: { children: React.ReactNode }) => {
  let [state, dispatch] = useReducer(Reducer, {
    token: 'Not Set'
  })
  
    return (
      <TokenStateContext.Provider value={state}>
        <TokenDispatchContext.Provider value={dispatch}>
          {children}
        </TokenDispatchContext.Provider>
      </TokenStateContext.Provider>
    )
}

// state 와 dispatch 를 쉽게 사용하기 위한 커스텀 Hooks
export const useTokenState = () => {
  const state = useContext(TokenStateContext)
  if (!state) throw new Error('Cannot find TokenProvider')
  return state
}

export const useTokenDispatch = () => {
  const dispatch = useContext(TokenDispatchContext)
  if (!dispatch) throw new Error('Cannot find TokenProvider')
  return dispatch
}