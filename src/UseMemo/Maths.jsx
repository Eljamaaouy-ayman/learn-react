// import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

const addThousand = (number) => {

    for(let i = 0;i < 1000000000; i++){
        // console.log("calcul in progress")
        number++
    }
    return number
}

export default function Maths() {
    const text = useRef()
    const [a, setA] = useState(0)
    const start = performance.now()
    // console.log(start)
    const handleClick = () => {
        setA(parseInt(text.current.value))
    }
    const calculate = useMemo(() => {

        const val = addThousand(a)
        const end = performance.now()
        console.log((end - start) / 1000 + 's')
        return val
    }, [a])

  return (
      <div>
        <input defaultValue={0} type="text" id='text' ref={text}/>
        <button onClick={handleClick} className='btn btn-primary'>add one</button>
        <h1>value : {calculate}</h1>
    </div>
  )
}
