import  { useState } from 'react'

function useCounter() {
    const [count,setCount] = useState(0)

    const handleincrement =()=>{
        setCount(count + 1)
    }
    const handleDecrement =()=>{
        setCount(count - 1)
    }

    return [count , handleincrement , handleDecrement]
}

export default useCounter