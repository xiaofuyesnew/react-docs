import { useState } from 'react'


const Index = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>{count}</div>
      <button className='bg-[#999]' onClick={setCount(count + 1)}>+++</button>
    </>
  )
}


export default Index