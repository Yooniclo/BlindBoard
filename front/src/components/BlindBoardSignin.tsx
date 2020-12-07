import React, { useEffect } from 'react'
import { Board, ButtonSet, KakaoButton } from '../emotion/BlindBoard'
import { Link, useHistory } from 'react-router-dom'
import KakaoLogin from 'react-kakao-login'
import { useTokenDispatch, useTokenState } from '../context/TokenContext'

const PORT = process.env.NODE_ENV === 'development'? 3000 : 80

const token = 'f6bd932bc52711ad6c4b449f63c5261b'

const BlindBoardSignin = () => { 
  
  const dispatch = useTokenDispatch()
  let history = useHistory()

  const Next = (res: any) => {
    // res => profile => id: 15215152, connected_at: 2020-12-05T09:52:00
    // res => response => access_token, expire_in: 7199, refresh_token, token_type: bearer
    dispatch({ type: 'SET_TOKEN', token: res.response.access_token })
    history.push('/write')
  }

  return (  
    <div id="BlindBoard" css={Board}>
      <div id="BoardHeader">
        <h1>익명의 사내게시판📄</h1>
      </div>
      <div id="Board" css={KakaoButton}>
        <KakaoLogin token={token} onSuccess={Next} onFail={console.error} onLogout={console.info}>카카오계정으로 로그인</KakaoLogin>
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