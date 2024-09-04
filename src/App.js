import React from "react";
import AnimatedBox from "./Animation/AnimatedBox"; // Import AnimatedBox component
import VariantsExample from "./Animation/VariansExample"; // Import VariantsExample component

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <AnimatedBox /> {/* Add AnimatedBox component */}
      <VariantsExample /> {/* Add VariantsExample component */}
    </div>
  );
};

export default App;
