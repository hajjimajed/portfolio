import './loader.styles.scss'
import { motion } from 'framer-motion'

const icon = {
    hidden: {
        pathLength: 0,
        fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
        pathLength: 1,
        fill: "rgba(255, 255, 255, 1)"
    }
}

const Loader = () => {
    return (
        <div className='loader-container'>
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                className="logo"
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 0, scale: 0 }}
                transition={{
                    type: "spring",
                    duration: 0.5,
                    delay: 2.5,

                }}
            >
                <motion.path
                    d="M0.0095937 186.5C0.0095937 167.908 0.00958011 137.541 0.00958011 119.458C0.00958192 101.375 -0.555974 76.2648 7.00957 58C14.5751 39.7352 25.401 27.8291 41.8389 16.8457C58.2768 5.86233 77.6024 -2.85163e-05 97.3721 1.04038e-10C117.142 2.85165e-05 136.467 5.86244 152.905 16.8459C169.343 27.8293 180.944 39.7352 188.51 58C196.075 76.2648 192.615 98.5576 192.615 119.458C192.615 136.941 192.615 165.709 192.615 186.5H152.905C152.905 170.107 152.905 133.548 152.905 116.5C152.905 100.962 151.79 78 149 72.2241C146.21 66.4481 141.115 59 132.115 53C123.115 47 111.705 43 97.3721 43C83.0388 43 75.4177 44.0369 63.5 52C60.5068 54 50.472 61.7053 46.115 72.2241C40.6299 85.4662 41.8389 100.562 41.8389 116.5C41.8389 132.438 41.8389 174.172 41.8389 186.5H0.0095937Z"
                    variants={icon}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                    }}
                />
                <motion.path
                    variants={icon}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                    }}
                    d="M153 372C153 353.408 153.01 137.541 153.01 119.458C153.01 101.375 152.444 76.2648 160.01 58C167.575 39.7352 178.401 27.8291 194.839 16.8457C211.277 5.86233 230.602 -2.85163e-05 250.372 1.04035e-10C270.142 2.85165e-05 289.467 5.86244 305.905 16.8459C322.343 27.8293 333.944 39.7352 341.51 58C349.075 76.2648 345.615 98.5576 345.615 119.458C345.615 136.941 345.615 165.709 345.615 186.5H305.905C305.905 170.107 305.905 133.548 305.905 116.5C305.905 100.962 304.79 78 302 72.2241C299.21 66.4481 294.115 59 285.115 53C276.115 47 264.705 43 250.372 43C236.039 43 228.418 44.0369 216.5 52C213.507 54 203.472 61.7053 199.115 72.2241C193.63 85.4662 194.839 100.562 194.839 116.5C194.839 132.438 194.839 359.672 194.839 372H153Z" fill="black" />
                <motion.path
                    variants={icon}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                    }}
                    d="M0 264L0 222H121V264H0Z" fill="black" />
                <motion.path
                    variants={icon}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                    }}
                    d="M225 372V330H346V372H225Z" fill="black" />
                <motion.path
                    variants={icon}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                    }}
                    d="M194 264V222H345.6V264H194Z" fill="black" />
                <motion.path
                    variants={icon}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                    }}
                    d="M0 372L0 330H155V372H0Z" fill="black" />
            </motion.svg>
        </div>
    )
}

export default Loader;