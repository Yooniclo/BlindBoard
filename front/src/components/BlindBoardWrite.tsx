import React, { useEffect, useRef } from 'react'
import { Board, ButtonSet, BoardWrite } from '../emotion/BlindBoard'
import { Link } from 'react-router-dom'
import { useModalDispatch } from '../context/ModalContext'

const PORT = process.env.NODE_ENV === 'development'? 3000 : 80

const BlindBoardWrite = () => { 

  const dispatch = useModalDispatch()

  const inputEl = useRef<HTMLInputElement>(null)
  const textareaEl = useRef<HTMLTextAreaElement>(null)

  useEffect(() => { 
    inputEl.current?.focus()
  }, [inputEl])

  const Write = async () => {
    
    const namelist = {
      firstname: ['작은', '큰', '귀여운', '푸른', '붉은', '파란', '바보', '멍청한', '미친', '아기', '강철의'],
      lastname: ['곰', '상자', '뱀', '상어', '닝겐', '사람', '연금술사', '소보루', '멍청이', '아빠', '부장님']
    }
    const firstrandom = Math.floor(Math.random() * (namelist.firstname.length - 0) + 0)
    const lastrandom = Math.floor(Math.random() * (namelist.lastname.length - 0) + 0)
    const nickname = namelist.firstname[firstrandom] + ' ' + namelist.lastname[lastrandom]

    type Data = {
      title: string | undefined,
      author: string | undefined,
      content: string | undefined
    }

    const data: Data = {
      title: inputEl.current?.value,
      author: nickname,
      content: textareaEl.current?.value
    }

    if(data.title?.length === 0 || data.content?.length === 0){
      const setVisible = () => dispatch({ type: 'SET_VISIBLE', visible: true })
      const setType = () => dispatch({ type: 'SET_MODAL_TYPE', modal_type: 'Normal' })
      const setMessage = () => dispatch({ type: 'SET_MESSAGE', message: '내용을 입력하지 않았습니다..😅' })
      setVisible()
      setType()
      setMessage()
      return false
    }

    const response = await fetch('http://localhost:3000/backend/write', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    })

    const result = await response.json()
    if(result.message === 'success') {
      const setVisible = () => dispatch({ type: 'SET_VISIBLE', visible: true })
      const setType = () => dispatch({ type: 'SET_MODAL_TYPE', modal_type: 'Route' })
      const setMessage = () => dispatch({ type: 'SET_MESSAGE', message: '작성이 완료되었습니다😀' })
      setVisible()
      setType()
      setMessage()
    }
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