import React from 'react'
import ReactDOM from 'react-dom'
import { ModalWrapper, ModalOverlay } from '../emotion/Modal'
import { useHistory } from "react-router-dom"

const Modal = (props: any) => {

    let history = useHistory()
    let ModalButton: any
    const el = document.getElementById("modal-root")

    const Route = (props: any) => {
        return <button onClick={()=> history.push('/')}>확인</button>
    }

    const Normal = (props: any) => {
        return <button onClick={()=> console.log('hi')}>확인</button>
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