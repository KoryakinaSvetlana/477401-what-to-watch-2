import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.js";

const films = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Die Hard`];

ReactDOM.render(
    <App
      films={films}
      onHeaderClick={(() => {})}
    />,
    document.getElementById(`root`)
);
