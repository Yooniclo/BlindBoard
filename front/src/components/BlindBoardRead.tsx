import React, { useEffect, useState } from 'react'
import { Board, ButtonSet, BoardRead, ReplyFloatingButton } from '../emotion/BlindBoard'
import { ModalOverlay, ReplyModalWrapper } from '../emotion/Modal'
import { RouteComponentProps } from 'react-router'
import { Link } from 'react-router-dom'
import TimeToString from './Common'

interface MatchParams {
  id: string
}

const BlindBoardRead = ({match}: RouteComponentProps<MatchParams>) => { 
  let [content, setContent]: any = useState([])  
  let [visible, setVisible]: any = useState(false)
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
        <div className="content-title">{content.title}</div>
        <div className="content-body">
          <span>{content.author}</span>
          <span>{TimeToString(content.time)}</span>
        </div>
        <div>
          {content.content}
        </div>
        <div css={ReplyFloatingButton}>
          <div>1개의 댓글</div>
          <div>
            <span className="material-icons md-24">quickreply</span>
          </div>
        </div>
      </div>
      <div id="BoardFooter">
        <div css={ButtonSet}>
          <Link to='/'>
            <span className="material-icons">list</span>
          </Link>
        </div>
      </div>
      {visible ?
      <div id="ReplyModal">
        <div css={ModalOverlay}></div>
          <div css={ReplyModalWrapper}>
            <div></div>
            <div></div>
        </div>
      </div>
      : null}
    </div>
  )
  
}

export default BlindBoardRead