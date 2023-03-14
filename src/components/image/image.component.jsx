import './image.styles.scss'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';
const squareVariants = {
    visible: {
        opacity: 1,
        translateY: 0,
        transition: {
            type: "just", // Change type from "spring" to "tween"
            duration: 0.3,
            delay: 0.2
        }
    },
    hidden: { opacity: 0, translateY: 200 }
};

const Imagee = ({ image }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
    return (
        <motion.img
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={squareVariants}
            key={image} src={image} alt="" />
    )
}

export default Imagee;