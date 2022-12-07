import { useState } from 'react'


const Profile = () => {
  const [count, setCount] = useState(1)

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

export default Profile