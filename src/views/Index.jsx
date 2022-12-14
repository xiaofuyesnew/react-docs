import { useState } from 'react'


const Index = () => {
  const [count, setCount] = useState(0)

  const onClick = () => {
    setCount(count + 1)
  }

  return (
    <>
      <div>{count}</div>
      <button className='bg-[#999]' onClick={onClick}>+++</button>
    </>
  )
}

export default Index