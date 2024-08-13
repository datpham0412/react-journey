import React from "react";

function Greeting(props) {
  return <h1>Hello, {props.name} </h1>;
}

export default Greeting;


// Using Greeting component in App.js: 

// import React from "react";
// import Greeting from "../src/components/FunctionalComponents/Greeting";

// function App() {
//   return (
//     <div>
//       <Greeting name="Tad" />
//       <Greeting name="Neb" />
//     </div>
//   );
// }
// export default App;
