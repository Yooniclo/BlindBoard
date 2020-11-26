import React, { useState, useEffect, useRef } from 'react'
import { Board, ButtonSet, BoardWrite } from '../emotion/BlindBoard'
import { Link } from 'react-router-dom'
 
const PORT = process.env.NODE_ENV === 'development'? 3000 : 80

const BlindBoardWrite = () => { 
  
  const inputEl = useRef<HTMLInputElement>(null)
  const textareaEl = useRef<HTMLTextAreaElement>(null)
  useEffect(() => { 
    inputEl.current?.focus()
  }, [inputEl])

  const Write = async () => {
    const data = {
      title: inputEl.current?.value,
      content: textareaEl.current?.value
    }
    const response = await fetch('http://localhost:3000/backend/write', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    })

    const result = await response.json()
    console.log(result)
  }

  return (  
    <div id="BlindBoard" css={Board}>
      <div id="BoardHeader">
        <h1>익명의 사내게시판📄</h1>
      </div>
      <div id="Board" css={BoardWrite}>
        <div>
          <input ref={inputEl} type="text" placeholder="제목을 입력하세요"/>
        </div>
        <div>

        </div>
        <div>
          <textarea placeholder="내용을 작성해주세요" ref={textareaEl}></textarea>
        </div>
      </div>
      <div id="BoardFooter">
        <div css={ButtonSet}>
          <span className="material-icons" onClick={Write}>create</span>
          <Link to='/'>
            <span className="material-icons">list</span>
          </Link>
        </div>
      </div>
    </div>
  )
  
}

export default BlindBoardWrite