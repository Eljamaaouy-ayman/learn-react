import React from 'react'
import { motion } from 'framer-motion'

export default function Anima() {
  return (
    <>
        <motion.h1 className="display-4 fw-normal" initial={{color:'darkgreen', opacity: 0.5}} animate={{scale: 1.1, opacity: 1}} transition={{duration: 0.5, delay: 1}}> hey from animation</motion.h1>
    </>
  )
}
