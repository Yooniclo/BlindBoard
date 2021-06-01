import { css } from '@emotion/react'

const breakpoints = [320, 568]

const media = breakpoints.map( bp => `@media (min-width: ${bp}px)` )

const Board = css`
    .material-icons.md-18 { font-size: 18px; }
    .material-icons.md-36 { font-size: 36px; }
    .material-icons.md-48 { font-size: 48px; }
    min-width: 320px;
    ${media[0]} { 
        width: 90%;
        font-size: 11px;
    }
    ${media[1]} { 
        width: 568px;
        font-size: 14px; 
    }
    #BoardHeader{
        ${media[0]} { height: 56px; }
        ${media[1]} { height: 86px; }
        padding: 10px;
        box-sizing: border-box;
        h1 {
            text-align: center;
        }
    }
    #Board{
        min-height: 480px;
        box-shadow: 0 0 10px #dbdbdb;
        border-radius: 10px;
        box-sizing: border-box;
        ul { 
            width: 100%; 
            :nth-of-type(even) { background-color: #f5f5f5; }
            cursor: pointer;
            a { color: #000; }
            &:hover {
                background-color: #dbdbdb;
            }
        }
        ul > a > li {
            display: inline-block;
            height: 48px; 
            line-height: 48px;
            text-align: center;
            :nth-of-type(1) { width: 55%; }
            :nth-of-type(2) { width: 25%; }
            :nth-of-type(3) { width: 20%; }
        }
        textarea{
            width: 100%;
            box-sizing: border-box;
        }
    }
    #BoardFooter{
        display: flex;
        width: 100%;
        justify-content: center;
        a { text-decoration: none; }
    }
`
const BoardRead = css`
    .content-title {
        font-size: 16px;
        text-align: center;
        border-bottom: 1px solid #dbdbdb;
        padding: 10px;
    }
    .content-body {
        width: 100%;
        span{
            display: inline-block;
            width: 50%;
            border-bottom: 1px solid #dbdbdb;
            padding: 10px;
            box-sizing: border-box;
        }
        span:first-of-type {
            text-align: left;
        }
        span:nth-of-type(2){
            text-align: right;
        }
    }
    div:nth-of-type(3) {
        height: 394px;
        box-sizing: border-box;
        padding: 10px;
        position: relative;
        overflow: auto;
    }
`
const BoardWrite = css`
    textarea {
        width: 100%;
        height: 399px;
        border: none;
        border-radius: 10px;
        resize: none;
        padding: 10px;
        :focus {
            outline: none;
        }
    }
    div:first-of-type {
        height: 40px;
        border-bottom: 1px solid #dbdbdb;
        input[type=text] {
            width: 100%;
            border-radius: 10px;
            outline: none;
            box-sizing: border-box;
            border: none;
            height: 40px;
            line-height: 40px;
            padding-left: 10px;
        }
    }
    div:nth-of-type(2) {
        height: 35px;
        border-bottom: 1px solid #dbdbdb;
    } 
`


const ButtonSet = css`
    margin-top: 20px;
    display: flex;
    height: 36px;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    span {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 36px;
        height: 36px;
        cursor: pointer;
        &:hover {
            background-color: #dbdbdb;
        }
        ::selection {
            background-color: #fff;
        }
    }
`

const NormalButton = css`
    border-radius: 5px;
    border: none;
    background-color: rgba(255, 255, 255, 0.7);
    width: 50px;
    height: 30px;
    cursor: pointer;
    &:hover {
        color: #0078ff;
    }
`
const KakaoButton = css`
    p {
        text-align: center;
        font-size: 16px;
        position: relative;
        top: 40px;
    }
    button {
        position: relative;
        left: 50%;
        margin-left: -111px;
        margin-top: 200px;
    }
`
const ReplyFloatingButton = css `
    width: 140px;
    height: 35px;
    line-height: 33px;
    bottom: 20px;
    position: fixed;
    right: 10px;
    float: right;
    div { display: inline-block; }
    div:first-of-type {
        position: relative;
        right: 10px;
        width: 100px;
        text-align: right;
    }
    div:last-of-type {
        width: 30%;
        box-shadow: 0 0 10px #dbdbdb;
        float: right;
        background-color: #fff;
        border-radius: 35px;
        width: 35px;
        height: 35px;
        position: absolute;
        cursor: pointer;
        &:hover {
            background-color: #dbdbdb;
        }
        span {
            position: relative;
            top: 7px;
            left: 6px;
        }
    }
`



export {
    Board,
    ButtonSet,
    BoardRead,
    BoardWrite,
    NormalButton,
    KakaoButton,
    ReplyFloatingButton
}