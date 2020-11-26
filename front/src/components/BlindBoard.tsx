import React, { useState, useEffect } from 'react'
import { Board, ButtonSet } from '../emotion/BlindBoard'
import { Link } from 'react-router-dom'
import TimeToString from './Common'
 
interface BoardRow {
  listMax: number
}

const PORT = process.env.NODE_ENV === 'development'? 3000 : 80

const BlindBoard = ({listMax}: BoardRow, {history}: any) => { 
  
  let [list, setList]: any = useState([])  

  useEffect(() => { 
    const GetList = async () => {
      const response = await fetch('http://localhost:3000/init')
      let json = await response.json()
      setList(json.filter((v: string | number , i: number) => i < listMax))
    }
    GetList()
  }, [listMax])

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
          <Link to='/write'>
            <span className="material-icons">edit</span>
          </Link>
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