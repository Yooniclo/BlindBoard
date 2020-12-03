let flag: boolean

const BlankCheck = (content: string | undefined) => {
    content?.length === 0 ? flag = false : flag = true
    return flag
}
  
export default BlankCheck