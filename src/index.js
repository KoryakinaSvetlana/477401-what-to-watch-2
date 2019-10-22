import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/app.jsx";

const films = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Die Hard`];

ReactDOM.render(
    <App films={films}/>,
    document.getElementById(`root`)
);
