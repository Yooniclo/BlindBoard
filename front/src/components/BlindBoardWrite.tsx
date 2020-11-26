import React, { useState, useEffect, useRef } from 'react'
import { Board, ButtonSet, BoardWrite } from '../emotion/BlindBoard'
import { Link } from 'react-router-dom'
 
const PORT = process.env.NODE_ENV === 'development'? 3000 : 80

const BlindBoardWrite = () => { 
  
  const textAreaEl = useRef<HTMLTextAreaElement>(null)
  useEffect(() => { 
    textAreaEl.current?.focus()
  }, [textAreaEl])

  return (  
    <div id="BlindBoard" css={Board}>
      <div id="BoardHeader">
        <h1>익명의 사내게시판📄</h1>
      </div>
      <div id="Board" css={BoardWrite}>
        <textarea ref={textAreaEl}></textarea>
      </div>
      <div id="BoardFooter">
        <div css={ButtonSet}>
          <Link to='/'>
            <span className="material-icons">list</span>
          </Link>
        </div>
      </div>
    </div>
  )
  
}

export default BlindBoardWrite