import React from 'react'
import './App.css'
import { motion, useAnimation } from 'framer-motion'
import path from './path'

function App() {

  const controls = useAnimation()
  const controls2 = useAnimation()

  React.useEffect(() => {
    const i_id = setInterval(() => {
      controls.start({
        bottom: "0%",
        right: "0%",
        scale: 38,
        borderRadius: '50%',
        transition: { duration: 0.5 },
      })
      controls2.start({
        opacity: '1',
        x: 0, y: 0,
        transition: { delay: 0.5, duration: 1 },
      })
    }, 6500)

    return () => clearInterval(i_id)
  }, [controls, controls2])


  return (
    <div className="App">
      <header className="App-header">

        <motion.svg
          initial={false}
          width="600"
          height="600"
        >

          <motion.path
            d={path}
            animate={{
              pathLength: [0, 0.5, 1],
              opacity: [0, 1, 1, 1, 1, 1, 1, 0],
              translateX: [0, 0, 0, 90],
              translateY: [160, 160, 160, -60],
              scale: [0.5, 0.5, 0.5, 0.2, 0.2],
            }}

            transition={{ duration: 4 }}
            fill="transparent"
            strokeWidth="2"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
          />


          <motion.path
            d={path2}
            transition={{ delay: 4, duration: 1.5 }}
            animate={{
              opacity: [0, 1],
              rotate: [30, 0],
              translateX: [900, 900, 900, 900, 0],
              translateY: [700, 700, 700, 700, 0],
            }}
            fill='white'
            strokeWidth="2"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <motion.path
            d={path3}
            transition={{ delay: 4.5, duration: 0.5 }}
            animate={{
              opacity: [0, 1],
              pathLength: [0, 1]
            }}
            fill="transparent"
            strokeWidth="2"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
          />


          <motion.path
            d={path4}
            transition={{ delay: 4.5, duration: 0.5 }}
            animate={{
              opacity: [0, 1],
              pathLength: [0, 1]
            }}
            fill="transparent"
            strokeWidth="2"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
          />


          <motion.path
            d={path5}
            transition={{ delay: 4.5, duration: 0.5 }}
            animate={{
              opacity: [0, 1],
              pathLength: [0, 1]
            }}
            fill="transparent"
            strokeWidth="2"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <motion.path
            d={path6}
            transition={{ delay: 5.5, duration: 2.5 }}
            animate={{
              opacity: [0.2, 1],
              pathLength: [0, 1]
            }}
            fill="transparent"
            strokeWidth="2"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <motion.circle
            cx="276.5453715399724" cy="153.63161222726774" r="67.91250000000008"
            animate={{
              opacity: [0, 1],
              pathLength: [0, 1]
            }}
            transition={{ delay: 2.5, duration: 1 }}
            fill="transparent"
            strokeWidth="2"
            stroke={'white'}
            strokeLinecap="round"
            strokeLinejoin="round"
          />

        </motion.svg>

        <motion.div
          id='curtains'
          animate={controls}
        >

        </motion.div>

        <motion.div id='end' animate={controls2}>
          The End <br />
          <small> -Shiv </small>
        </motion.div>
      </header>
    </div>
  )
}

export default App


const path2 = ' M 262.362 208.675 C 256.22 207.415 252.44 206.05 247.085 203.215 C 236.847 197.755 227.975 188.515 222.987 178.12 C 221.99 176.02 221.15 174.077 221.15 173.762 C 221.15 173.395 231.02 171.452 245.825 168.827 L 270.5 164.47 L 272.81 166.57 C 275.907 169.457 280.632 171.715 284.885 172.502 C 294.072 174.077 303.995 169.09 308.352 160.742 L 310.032 157.435 L 320.06 155.702 C 325.573 154.757 330.56 153.865 331.085 153.707 C 332.03 153.445 332.083 153.655 331.768 157.802 C 329.93 183.107 309.927 204.37 283.73 208.937 C 277.692 209.987 268.242 209.882 262.362 208.675 Z '
const path3 = 'M 267.921 144.406 C 268.603 140.783 271.491 135.848 274.693 132.698 C 281.413 126.136 290.338 124.036 298.318 127.133 C 300.628 128.078 299.683 128.288 296.113 127.658 C 290.286 126.608 282.621 128.918 277.896 133.013 C 275.323 135.271 271.963 140.416 271.281 143.251 C 270.861 144.826 270.388 145.561 269.601 145.771 C 267.711 146.296 267.553 146.138 267.921 144.406 Z '
const path4 = ' M 220 153.55 C 220.105 146.725 222.415 137.38 225.723 130.398 C 232.6 116.013 244.15 106.3 260.162 101.418 C 264.625 100.053 265.465 100 275.125 100 C 284.785 100 285.625 100.053 290.088 101.418 C 304.84 105.933 316.705 114.91 324.16 127.248 L 326.05 130.398 L 323.268 131.29 C 321.797 131.815 320.013 132.235 319.435 132.235 C 318.805 132.235 317.125 132.55 315.76 132.97 C 314.343 133.39 312.138 133.915 310.825 134.178 C 308.568 134.598 308.41 134.545 306.625 132.708 C 303.055 129.033 298.803 127.09 292.66 126.197 C 287.41 125.515 279.745 127.983 275.388 131.763 C 272.815 134.073 269.455 139.165 268.773 142.053 C 268.248 143.943 267.933 144.31 266.515 144.573 C 263.313 145.203 259.585 146.043 257.013 146.673 C 253.39 147.618 249.61 148.458 246.617 149.035 C 245.253 149.298 243.362 149.718 242.418 150.033 C 240.895 150.505 230.71 152.815 223.045 154.495 L 220 155.178 L 220 153.55 Z '
const path5 = ' M 284.832 164.102 C 282.207 163.42 278.637 161.11 277.062 159.01 C 275.067 156.385 274.227 153.865 274.175 150.347 C 274.175 144.677 276.747 140.215 281.63 137.537 C 285.305 135.49 291.08 135.332 294.44 137.117 C 299.952 140.057 302.577 144.257 302.577 150.137 C 302.577 157.855 297.012 163.892 289.452 164.365 C 287.825 164.47 285.778 164.312 284.832 164.102 Z '
const path6 = ' M 158.353 174.252 L 187.665 166.398 C 189.265 165.969 190.739 166.279 190.957 167.089 L 190.957 167.089 C 191.174 167.9 190.051 168.905 188.452 169.334 L 159.14 177.188 C 157.54 177.617 156.066 177.307 155.848 176.497 L 155.848 176.497 C 155.631 175.686 156.754 174.681 158.353 174.252 L 158.353 174.252 L 158.353 174.252 Z  M 171.878 196.946 L 188.319 192.541 C 189.553 192.21 190.732 192.599 190.949 193.41 L 190.949 193.41 C 191.166 194.22 190.34 195.146 189.106 195.477 L 172.665 199.882 C 171.43 200.213 170.252 199.824 170.035 199.013 L 170.035 199.013 C 169.818 198.203 170.643 197.277 171.878 196.946 L 171.878 196.946 L 171.878 196.946 Z  M 152.047 188.967 L 167.401 184.853 C 168.598 184.532 169.747 184.929 169.964 185.739 L 169.964 185.739 C 170.181 186.55 169.385 187.468 168.187 187.789 L 152.834 191.903 C 151.636 192.224 150.488 191.827 150.27 191.016 L 150.27 191.016 C 150.053 190.206 150.85 189.288 152.047 188.967 L 152.047 188.967 Z  M 179.615 182.681 L 198.921 177.508 C 199.974 177.226 200.945 177.43 201.088 177.963 L 201.088 177.963 C 201.231 178.497 200.492 179.159 199.439 179.442 L 180.133 184.615 C 179.079 184.897 178.108 184.693 177.965 184.159 L 177.965 184.159 C 177.822 183.626 178.561 182.963 179.615 182.681 Z '
