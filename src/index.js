import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h>Hello React World</h>;
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before
// React.render(<App />)
