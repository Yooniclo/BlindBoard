import React, { useEffect, useRef } from 'react'
import { Board, ButtonSet } from '../emotion/BlindBoard'
import { Link } from 'react-router-dom'

const PORT = process.env.NODE_ENV === 'development'? 3000 : 80

const BlindBoardSignin = () => { 

  useEffect(() => { 

  })

  return (  
    <div id="BlindBoard" css={Board}>
      <div id="BoardHeader">
        <h1>익명의 사내게시판📄</h1>
      </div>
      <div id="Board">

      </div>
      <div id="BoardFooter">
        <div css={ButtonSet}>
          <span className="material-icons">create</span>
          <Link to='/'>
            <span className="material-icons">list</span>
          </Link>
        </div>
      </div>
    </div>
  )
  
}

export default BlindBoardSignin