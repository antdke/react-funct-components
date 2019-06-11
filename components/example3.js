// JavaScript object destructuring is used in the function signature for the props object being passed
// We use it because props are always coming as an object and most often information has to be extracted from the props
// Destructuring helps us do that easier

import React from "react";

function App() {
  const greeting = "Hello Universe!";

  return <Headline value={greeting} />;
}

function Headline({ value }) {
  return <h1>{value}</h1>;
}

// Here, the prop being passed to the Headline component is destructured so now "props.value" does not have to be used to pull the data out from the prop

// There are instances where you dont want to destructure your props and simply pass them to the next component with spread operator (Ex: ...object)

export default App;
