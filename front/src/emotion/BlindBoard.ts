import { css } from '@emotion/react'

const breakpoints = [320, 568]

const media = breakpoints.map( bp => `@media (min-width: ${bp}px)` )

const Board = css`
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
            ${media[0]} { height: 44px; line-height: 44px; }
            ${media[1]} { height: 48px; line-height: 48px; }
            text-align: center;
            :nth-of-type(1) { width: 60%; }
            :nth-of-type(2) { width: 25%; }
            :nth-of-type(3) { width: 15%; }
        }
        textarea{
            width: 100%;
            box-sizing: border-box;
        }
    }
    #BoardFooter{
        display: flex;
        justify-content: center;
        .material-icons.md-18 { font-size: 18px; }
        .material-icons.md-36 { font-size: 36px; }
        .material-icons.md-48 { font-size: 48px; }
        a { text-decoration: none; }
    }
`
const BoardRead = css`
    div:first-of-type {
        font-size: 16px;
        text-align: center;
        border-bottom: 1px solid #dbdbdb;
        padding: 10px;
    }
    div:nth-of-type(2) {
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
    div:last-of-type {
        padding: 10px;
    }
`
const BoardWrite = css`
    textarea {
        width: 100%;
        height: 415px;
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
        :first-of-type{ border-right: 1px solid #dbdbdb; }
        :last-of-type{ border-left: 1px solid #dbdbdb; }
        cursor: pointer;
        &:hover {
            background-color: #dbdbdb;
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

export {
    Board,
    ButtonSet,
    BoardRead,
    BoardWrite,
    NormalButton
}