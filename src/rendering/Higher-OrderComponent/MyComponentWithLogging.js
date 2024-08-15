import React, { useEffect } from "react";

// Higher-Order component
const withLogging = (WrappedComponent) => {
  return (props) => {
    useEffect(() => {
      console.log(`Component ${WrappedComponent.name} mounted`);
      return () => {
        console.log(`Component ${WrappedComponent.name} unmounted`);
      };
    }, []);
    return <WrappedComponent {...props} />;
  };
};

// Example component to be wrapped
const MyComponent = (props) => {
  return <div>Hello, {props.name}!</div>;
};

// Enhanced component with logging
const MyComponentWithLogging = withLogging(MyComponent);

export default MyComponentWithLogging;
