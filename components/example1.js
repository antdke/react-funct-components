// Functional components are basically JavaScript functions being used as React functions which return JSX

import React from "react";

function App() {
  const greeting = "Hello Functional Component";

  return <h1>{greeting}</h1>;
}

// As opposed to a React Class Component (rcc), React Functional Components (rfc) have no render functions
// That's because everything defined within the body of the an rfc IS the render function and returns JSX in the end

export default App;
