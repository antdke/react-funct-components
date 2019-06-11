// Props are used to pass info from component to component
// Props are always passed DOWN the component tree

import React from "react";

function App() {
  const greeting = "Hello Universe";
  return <Headline value={greeting} />;
}

function Headline(props) {
  return <h1>{props.value}</h1>;
}

// Props are rfc parameters
// The component stays generic and we decide from the outside what it should render (or how it should behave)
// "rendering a component" = having a component within the body of another component
