import React, { useState, useEffect } from 'react'
import { Board, ButtonSet } from './emotion/BlindBoard'
import { Link } from 'react-router-dom'
 
interface BoardRow {
  listMax: number
}

const TimeToString = (time: string) => {
  const now: Date = new Date()
  const reg_time: Date = new Date(time)
  let string

  let diff = now.getTime() - reg_time.getTime()
  let days = Math.floor((diff / (1000 * 60 * 60 * 24)))
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  //let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  //let seconds = Math.floor((diff % (1000 * 60)) / (1000))
  if(days > 0){
    string = days + '일전'
  }else if(hours > 1 && days === 0){
    string = hours + '시간전'
  }else{
    string = '방금전'
  }

  return string
}

const PORT = process.env.NODE_ENV === 'development'? 3000 : 80

const BlindBoard = ({listMax}: BoardRow, {history}: any) => { 

  let [list, setList]: any = useState([])  

  useEffect(() => { 
    const GetList = async () => {
      const response = await fetch('http://localhost:' + PORT)
      let json = await response.json()
      setList(json.filter((v: string | number , i: number) => i < listMax))
    }
    GetList()
  })
  
  const GetContent = (e: React.MouseEvent<HTMLUListElement>) => {
    console.log(e.currentTarget.dataset.id)
  }

  return (  
    <div id="BlindBoard" css={Board}>
      <div id="BoardHeader">
        <h1>익명의 사내게시판📄</h1>
      </div>
      <div id="Board">
        {list.map((v: any, i:any) => (
          <ul key={v.id} data-id={v.id}>
            <Link to={`/read/${v.id}`}>
              <li>{v.title.length > 26 ? v.title.substr(0, 20) + '...' : v.title}</li>
              <li>{v.author}</li>
              <li>{TimeToString(v.time)}</li>
            </Link>
          </ul>
        ))}
      </div>
      <div id="BoardFooter">
        <div css={ButtonSet}>
          <span className="material-icons">chevron_left</span>
          <span className="material-icons">edit</span>
          <span className="material-icons">chevron_right</span>
        </div>
      </div>
    </div>
  )
  
}

BlindBoard.defaultProps = {
  listMax: 10
}

export default BlindBoard