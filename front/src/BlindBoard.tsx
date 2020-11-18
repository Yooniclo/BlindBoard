import React, { useEffect} from 'react'
import { Board, ButtonSet } from './emotion/BlindBoard'

interface BoardRow {
  listMax: number
  dummy: any
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


const BlindBoard = ({dummy, listMax}: BoardRow) => { 

  const list = dummy.filter((v: string | number , i: number) => i < listMax)

  useEffect(() => { 
    const GetList = async () => {
      const response = await fetch('http://localhost:3000/write')
      let json = await response.json()
      console.log(json)
      
    }
    GetList()
  })
  
  return (  
    <div id="BlindBoard" css={Board}>
      <div id="BoardHeader">
        <h1>익명의 사내게시판📄</h1>
      </div>
      <div id="Board">
        {list.map((v: any, i:any) => (
          <ul key={v.id}>
            <li>{v.title.substr(0, 20) + '...'}</li>
            <li>{v.author}</li>
            <li>{TimeToString(v.time)}</li>
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
  listMax: 10,
  dummy: [
    {
      id: 1,
      title: 'dummy1231dwdfewdfwqfwfwfwfwddadawdawd',
      author: '간지나는 파이리',
      time: '2020-11-16 13:44'
    },
    {
      id: 2,
      title: '안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요',
      author: '불맛나는 꼬부기',
      time: '2020-11-16 12:12'
    }
  ]
}

export default BlindBoard