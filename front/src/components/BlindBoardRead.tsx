import React, { useEffect, useState } from 'react'
import { Board, ButtonSet, BoardRead, ReplyFloatingButton } from '../emotion/BlindBoard'
import { RouteComponentProps } from 'react-router'
import { Link } from 'react-router-dom'
import TimeToString from './Common'

interface MatchParams {
  id: string
}

const BlindBoardRead = ({match}: RouteComponentProps<MatchParams>) => { 
  let [content, setContent]: any = useState([])  
  useEffect(() => { 
    const ReadContent = async () => {
      const response = await fetch('http://localhost:3000/backend/read/' + match.params.id)
      let json = await response.json()
      setContent(json[0])
    }
    ReadContent()
  }, [match.params.id])

  return (  
    <div id="BlindBoard" css={Board}>
      <div id="BoardHeader">
        <h1>익명의 사내게시판📄</h1>
      </div>
      <div id="Board" css={BoardRead}>
        <div>{content.title}</div>
        <div>
          <span>{content.author}</span>
          <span>{TimeToString(content.time)}</span>
        </div>
        <div>
          {content.content}
        </div>
        <div css={ReplyFloatingButton}>
          <span className="material-icons md-24">quickreply</span>
        </div>
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