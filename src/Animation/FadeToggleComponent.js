import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FadeToggleComponent = () => {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{
                            width: '100px',
                            height: '100px',
                            backgroundColor: 'green',
                            margin: '20px auto'
                        }}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default FadeToggleComponent;
