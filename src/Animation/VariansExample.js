import React from 'react';
import { motion } from 'framer-motion';

const boxVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1, rotate: 10 },
    tap: { scale: 0.9 }
};

const VariantsExample = () => {
    return (
        <motion.div
            className="box"
            variants={boxVariants} // Use the defined variants
            initial="initial"      // Set the initial state
            whileHover="hover"     // Animation when hovering
            whileTap="tap"         // Animation when tapping/clicking
            style={{
                width: '100px',
                height: '100px',
                backgroundColor: 'red',
                margin: '50px auto'
            }}
        />
    );
};

export default VariantsExample;
