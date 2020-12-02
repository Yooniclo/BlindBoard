import { useModalDispatch } from '../context/ModalContext'

const BlankCheck = (content: string) => {
    const dispatch = useModalDispatch()
    const setVisible = () => dispatch({ type: 'SET_VISIBLE', visible: true })
    const setType = () => dispatch({ type: 'SET_MODAL_TYPE', modal_type: 'Route' })
    const setMessage = () => dispatch({ type: 'SET_MESSAGE', message: '내용을 입력하시지 않으셨습니다..😅' })
    setVisible()
    setType()
    setMessage()
}
  
export default BlankCheck