import React, { useEffect, useState, useRef } from 'react'
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
  let [reply_count, setReplyCount]: any = useState(0)  
  let [reply_content, setReplyContent]: any = useState([])  
  let [visible, setVisible]: any = useState(false)

  const textareaEl = useRef<HTMLTextAreaElement>(null)

  useEffect(() => { 
    const ReadContent = async () => {
      const response = await fetch('http://localhost:3000/backend/read/' + match.params.id)
      let json = await response.json()
      setContent(json[0])
    }
    const ReplyCount = async () => {
      const response = await fetch('http://localhost:3000/backend/reply/count/' + match.params.id)
      let json = await response.json()
      console.log(json)
      //setReplyCount(json[0])
    }
    ReadContent()
    ReplyCount()
  }, [match.params.id])

  const OpenReplyModal = async() => {
    const response = await fetch('http://localhost:3000/backend/reply/read/' + match.params.id)
    let json = await response.json()
    setReplyContent(json[0])  
    console.log(json[0])
    setVisible(true)
  }

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
          <div css={ReplyFloatingButton}>
          <div>1개의 댓글</div>
          <div>
            <span className="material-icons md-24" onClick={OpenReplyModal}>quickreply</span>
          </div>
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
            <div className="reply-wrapper">
              <div className="reply-header">
                <div>{reply_content.author}</div>
                <div>{TimeToString(reply_content.time)}</div>
              </div>
              <div className="reply-contents">{reply_content.content}</div>
            </div>
            <div className="reply-write-set">
              <textarea placeholder="내용을 작성해주세요" ref={textareaEl}></textarea>
              <div className="reply-modal-button-set">
                <button>작성</button>
                <button onClick={()=>setVisible(false)}>닫기</button>
              </div>
            </div>
        </div>
      </div>
      : null}
    </div>
  )
  
}

export default BlindBoardRead