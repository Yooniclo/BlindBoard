import { createPortal } from 'react-dom'
import { useEffect } from 'react'

const Portal = ({children}: any) => {
  const mount = document.getElementById("modal-root");
  const el = document.createElement("div");

  useEffect((): any => {
    mount?.appendChild(el)
    return () => mount?.removeChild(el)
  }, [el, mount])

  return createPortal(children, el)
}


export default Portal