import React, { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import string from "./String.json";
import './services.css'
const text = string.Description_1;
const gradientText = string.Description_2;

const handleMouseOver = (e) => {
    const spans = document.querySelectorAll('.hover-gradient-text span');
    spans.forEach(span => span.classList.remove('gradient-text'));
    const index = Array.from(spans).indexOf(e.target);
    for (let i = Math.max(0, index - 5); i <= Math.min(spans.length - 1, index + 5); i++) {
        spans[i].classList.add('gradient-text');
    }
};

const handleMouseOut = () => {
    const spans = document.querySelectorAll('.hover-gradient-text span');
    spans.forEach(span => span.classList.remove('gradient-text'));
};

const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
    delay: 1
};

const Description = () => {
    const controls = useAnimation();
    const ref = React.useRef(null);
    const inView = useInView(ref, { once: false }); // Allow multiple triggers

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden"); // Reset to hidden when out of view
        }
    }, [controls, inView]);

    return (
        <div
            className="descriptionContainer flex flex-col items-center justify-center min-h-screen text-center px-4 "
            id="description-section"
            ref={ref}
        >
            <motion.div
                className="large-title text-3xl md:text-4xl lg:text-5xl font-semi-bold tracking-wide"
                initial="hidden"
                animate={controls}
                variants={fadeInUp}
                transition={{ duration: 2, delay: 0.8 }}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                <div>
                    {text}
                </div>
                <span className="gradient-text font-bold">{gradientText}</span>
            </motion.div>
            <div className="flex flex-col md:flex-row justify-center gap-8">
                {string.MainPoints.map((point, index) => (
                    <motion.div
                        key={index}
                        className="max-w-xs"
                        initial="hidden"
                        animate={controls}
                        variants={fadeInUp}
                        transition={{ duration: 0.8, delay: index * 0.9 }} // Stagger effect
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    >
                        <h2 className="text-lg font-bold mb-5">{point.Title}</h2>
                        <p>{point.Description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Description;
