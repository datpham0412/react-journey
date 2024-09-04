import React from "react";
import AnimatedBox from "./Animation/AnimatedBox"; // Import AnimatedBox component
import VariantsExample from "./Animation/VariansExample"; // Import VariantsExample component
import FadeToggleComponent from "./Animation/FadeToggleComponent"; // Import FadeToggleComponent

const App = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>React Animation Examples with Framer Motion</h1>

      {/* Basic fade and slide animation */}
      <h2>1. Basic Fade and Slide Animation</h2>
      <AnimatedBox />

      {/* Animation using variants for hover and tap */}
      <h2>2. Hover and Tap Animation with Variants</h2>
      <VariantsExample />

      {/* Animation presence example for fade in/out */}
      <h2>3. Animate Presence: Fade In and Out</h2>
      <FadeToggleComponent />
    </div>
  );
};

export default App;
