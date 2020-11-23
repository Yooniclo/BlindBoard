import React, { useEffect, useState } from 'react'
import { Board, ButtonSet } from '../emotion/BlindBoard'
import { Link } from 'react-router-dom'

const BlindBoardRead = () => { 
  
  let [list, setList]: any = useState([])  

  useEffect(() => { 
    const ReadContent = async () => {
      const response = await fetch('http://localhost:3000/init')
      let json = await response.json()
    }
    ReadContent()
  }, [])

  return (  
    <div id="BlindBoard" css={Board}>
      <div id="BoardHeader">
        <h1>익명의 사내게시판📄</h1>
      </div>
      <div id="Board">
 
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

export default BlindBoardRead