import React, { useEffect, useState, useRef } from 'react'
import ReactDOM from 'react-dom'
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
  let [reply_contents, setReplyContents]: any = useState([])  
  let [visible, setVisible]: any = useState(false)
  let [add_reply_content, setAddReplyContent]: any = useState(null)

  const textareaEl = useRef<HTMLTextAreaElement>(null)

  useEffect(() => { 

    // Promise.all([
    //   fetch('http://localhost:3000/backend/reply/count/' + match.params.id),
    //   fetch('http://localhost:3000/backend/read/' + match.params.id)
    // ]).then(async([response]) => {
    //   let json = await response.json()
    //   console.log(json)
    // }).catch((err) => {
    //   console.log(err)
    // })
    const ReadContent = async () => {
      const response = await fetch('http://localhost:3000/backend/read/' + match.params.id)
      let json = await response.json()
      setContent(json[0])
    }
    const ReplyCount = async () => {
      const response = await fetch('http://localhost:3000/backend/reply/count/' + match.params.id)
      let json = await response.json()
      setReplyCount(json[0][0].count)
    }
    ReadContent()
    ReplyCount()
  }, [match.params.id])

  const OpenReplyModal = async() => {
    const response = await fetch('http://localhost:3000/backend/reply/read/' + match.params.id)
    let json = await response.json()
    setReplyContents(json)  
    setVisible(true)
  }

  const ReplyWrite = async () => {
    
    const namelist = {
      firstname: ['작은', '큰', '귀여운', '푸른', '붉은', '파란', '바보', '멍청한', '미친', '아기', '강철의'],
      lastname: ['곰', '상자', '뱀', '상어', '닝겐', '사람', '연금술사', '소보루', '멍청이', '아빠', '부장님']
    }
    const firstrandom = Math.floor(Math.random() * (namelist.firstname.length - 0) + 0)
    const lastrandom = Math.floor(Math.random() * (namelist.lastname.length - 0) + 0)
    const nickname = namelist.firstname[firstrandom] + ' ' + namelist.lastname[lastrandom]

    type Data = {
      list_id: number | undefined,
      author: string | undefined,
      content: string | undefined
    }

    const data: Data = {
      list_id: Number(match.params.id),
      author: nickname,
      content: textareaEl.current?.value.replace(/'/g, "\\'")
    }

    const response = await fetch('http://localhost:3000/backend/reply/write', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    })

    const result = await response.json()
    if(result.message === 'Success') {
      setAddReplyContent(data)
    }
  }

  const ReplyModal = () => {
    return (
      <div id="ReplyModal">
      <div css={ModalOverlay}></div>
        <div css={ReplyModalWrapper}>
          <div className="reply-container">
            {reply_contents.map((v: any, i:any) => (
              <div className="reply-wrapper" key={v.id}>
                <div className="reply-header">
                  <div>{v.author}</div>
                  <div>{TimeToString(v.time)}</div>
                </div>
                <div className="reply-contents">{v.content}</div>
              </div>
            ))}
            {add_reply_content !== null ?
              <div className="reply-wrapper">
                <div className="reply-header">
                  <div>{add_reply_content.author}</div>
                  <div>{TimeToString(add_reply_content.time)}</div>
                </div>
                <div className="reply-contents">{add_reply_content.content}</div>
              </div>
            : null
            }
          </div>
          <div className="reply-write-set">
            <textarea placeholder="내용을 작성해주세요" ref={textareaEl}></textarea>
            <div className="reply-modal-button-set">
              <button onClick={ReplyWrite}>작성</button>
              <button onClick={CloseReplyModal}>닫기</button>
            </div>
          </div>
      </div>
    </div>
    )
  }

  const CloseReplyModal = () => {
    setVisible(false)
    setAddReplyContent(null)
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
          <pre>{content.content}</pre>
          <div css={ReplyFloatingButton}>
          <div>{reply_count}개의 댓글</div>
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
        <ReplyModal />
      : null}
    </div>
  )
  
}

export default BlindBoardRead