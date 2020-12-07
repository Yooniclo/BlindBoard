import React from 'react'
import ReactDOM from 'react-dom'
import { ModalWrapper, ModalOverlay } from '../emotion/Modal'
import { useHistory } from 'react-router-dom'
import { useModalDispatch } from '../context/ModalContext'

const Modal = (props: any) => {

    let history = useHistory()
    let ModalButton: any
    const el = document.getElementById("modal-root")
    const dispatch = useModalDispatch()

    const MoveRoute = () => {
        dispatch({ type: 'SET_VISIBLE', visible: false })
        history.push('/')
    }

    const Route = (props: any) => {
        return <button onClick={MoveRoute}>확인</button>
    }

    const Normal = (props: any) => {
        return <button onClick={()=> dispatch({ type: 'SET_VISIBLE', visible: false })}>확인</button>
    }

    switch(props.type) {
        case 'Route':
            ModalButton = Route
        break
        case 'Normal':
            ModalButton = Normal
    }

    return el ? ReactDOM.createPortal(
        props.visible?
        <div>
            <div css={ModalOverlay}></div>
            <div css={ModalWrapper}>
                <div>{props.children}</div>
                <div><ModalButton /></div>
            </div>
        </div>
        : null, el
    ) : null

}

export default Modal