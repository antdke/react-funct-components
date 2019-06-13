// React Hooks made it possible to use state in functional components
// States turns a component from static and boring to interactive and exciting

import React, { useState } from "react";

const App = () => {
  <Headline />;
};

const Headline = () => {
  // The useState hook takes an initial state as parameter and returns an array which holds the current state as first item and a function to change the state
  // We use JS array destructuring to access both items
  const [greeting, setGreeting] = useState("Hello Universe!");

  return (
    <div>
      <h1>{greeting}</h1>

      <input
        type="text"
        value={greeting}
        // the target event propery returns the element that triggered the event
        onChange={event => setGreeting(event.target.value)}
      />
    </div>
  );
};

// By providing an event handler to the input field, we are able to do something with a callback function when the input field changes its value.

export default App;
