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

export default TimeToString