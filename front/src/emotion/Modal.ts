import { css } from '@emotion/react'
import { NormalButton } from './BlindBoard'

const breakpoints = [320, 568]

const media = breakpoints.map( bp => `@media (min-width: ${bp}px)` )

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

const ReplyModalWrapper = css`
    text-align: center;
    position: fixed;
    left: 50%;
    top: 50%;
    ${media[0]} { width: 90vw; margin-left: -45vw; height: 85vh; margin-top: -42.5vh;}
    ${media[1]} { width: 30vw; margin-left: -15vw; height: 460px; margin-top: -230px;}
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 1000;
    border-radius: 10px;
    .reply-container{
        padding-top: 10px;
        box-sizing: border-box;
        ${media[0]} { height: 67vh; }
        ${media[1]} { height: 320px; }
        overflow: scroll;
        &::-webkit-scrollbar { 
            display: none;
        }
    }
    .reply-wrapper {
        
    }
    .reply-header {
        width: 100%;
        height: 30px;
        line-height: 30px;
        div{ float: left; width: 50%; }
        div:first-of-type { text-align: left; padding-left: 30px; box-sizing: border-box; }
        div:last-of-type { text-align: right; padding-right: 30px; box-sizing: border-box; }
    }
    .reply-contents {
        text-align: left;
        padding-left: 30px;
        box-sizing: border-box;
    }
    .reply-write-set {
        width: 100%;
        height: 80px;
        margin-top: 10px;
        textarea{
            height: 80px;
            border: none;
            border-radius: 10px;
            resize: none;
            padding: 10px;
            :focus {
                outline: none;
            }
            ${media[0]} { width: 85vw; }
            ${media[1]} { width: 27.5vw; }
            box-sizing: border-box;
        }
    }
    .no-reply {
        margin-top: 150px;
    }
    .reply-modal-button-set {
        width: 100%;
        height: 42px;
        line-height: 42px;
        button{
            ${NormalButton}
            margin: 0px 3px 0px 3px;
        }
    }
`


export {
    ModalWrapper, ModalOverlay, ReplyModalWrapper
}