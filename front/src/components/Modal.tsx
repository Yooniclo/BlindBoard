import React from 'react'
import { ModalWrapper, ModalOverlay } from '../emotion/Modal'
import { useHistory } from "react-router-dom"

const Modal = (props: any) => {

    let history = useHistory()
    let ModalButton: any

    const Route = (props: any) => {
        return <button onClick={()=> history.push('/')}>확인</button>
    }

    switch(props.type) {
        case 'Route' :
        ModalButton = Route
    }

    return(
        props.visible?
        <div>
            <div css={ModalOverlay}></div>
            <div css={ModalWrapper}>
                <div>{props.children}</div>
                <div><ModalButton /></div>
            </div>
        </div>
        : null
    )

}

export default Modal