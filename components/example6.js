// Perfect example of how to pass functions between components as props & how to share a function between components
// Here, one parent component manages the logic and the two child, sibling components that recieve props
// The props can always include a callback function to call a function in another component. Basically that's how it's possible to call a function in different components in React

import React, { useState } from "react";

const App = () => {
  const [greeting, useGreeting] = useState("Hello Universe");

  const handleChange = event => setGreeting(event.target.value);

  return (
    <div>
      <Headline headline={greeting} />

      <Input value={greeting} onChangeInput={handleChange}>
        Set Greeting:
      </Input>
    </div>
  );
};

const Headline = ({ headline }) => <h1>{headline}</h1>;

const Input = ({ value, onChangeInput, children }) => (
  <label>
    {children}
    <input type="text" value={value} onChange={onChangeInput} />
  </label>
);

export default App;
