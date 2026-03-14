// import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'

export default function Maths() {

    const [c, setC] = useState(5)
    let a = 13, b = 15


    const handleClick = useCallback(() => {
        setC(c + 1)
        let result = a + b
        console.log(result)
        return result
    }, [a, b])


    useEffect(() => {
        console.log(c)
    }, [c])

  return (
      <div>
    <button className="btn btn-primary" onClick={handleClick}>calculate</button>
    </div>
  )
}
