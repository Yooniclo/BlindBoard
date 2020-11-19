import { css } from '@emotion/core'

const breakpoints = [320, 568]

const media = breakpoints.map( bp => `@media (min-width: ${bp}px)` )

const Board = css`
    min-width: 320px;
    ${[media[0]]} { 
        width: 90%;
        font-size: 11px;
    }
    ${[media[1]]} { 
        width: 568px;
        font-size: 14px; 
    }
        #BoardHeader{
            ${[media[0]]} { height: 56px; }
            ${[media[1]]} { height: 86px; }
            padding: 10px;
            box-sizing: border-box;
            h1 {
                text-align: center;
            }
        }
        #Board{
            height: 700px;
            box-shadow: 0 0 10px #dbdbdb;
            border-radius: 10px;
            box-sizing: border-box;
            ul { 
                width: 100%; 
                :nth-of-type(even) { background-color: #f5f5f5; }
                cursor: pointer;
                &:hover {
                    background-color: #dbdbdb;
                }
            }
            ul > li {
                display: inline-block;
                height: 50px;
                line-height: 48px;
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
        }
`

const ButtonSet = css`
    margin-top: 10px;
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

export {
    Board,
    ButtonSet
}