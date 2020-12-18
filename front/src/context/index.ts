import React from 'react'

export const ModalOptions = {
    visible: false,
    type: 'Route',
    message: ''
}
  
export const ModalOptionsContext = React.createContext(ModalOptions)