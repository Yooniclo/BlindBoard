import { css } from '@emotion/react'
import { NormalButton } from './BlindBoard'

const ModalWrapper = css`
    text-align: center;
    width: 300px;
    height: 150px;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -150px;
    margin-top: -75px;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 1000;
    border-radius: 10px;
    div:first-of-type {
        width: 100%;
        height: 80px;
        line-height: 80px;
    }
    div:last-of-type {
        width: 100%;
        height: 70px;
        line-height: 70px;
        button{
            ${NormalButton}
        }
    }

`
const ModalOverlay = css`
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 999;
`
export {
    ModalWrapper, ModalOverlay
}