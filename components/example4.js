//With JS ES6, rfc can be written as arrow functions aka lambda functions
// Instead of a function, they become a const variable

import React from "react";

const App = () => {
  const greeting = "Hello Universe!";

  return <Headline value={greeting} />;
};

const Headline = ({ value }) => <h1>{value}</h1>;

export default App;

//When a rfc only returns an output without doing something else in between, then the curly braces can be left out and the explicit return statement becomes an implicit return statement and can be left out as well
