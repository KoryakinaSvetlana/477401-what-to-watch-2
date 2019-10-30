import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.js";

import films from "../../mock/films.js";

ReactDOM.render(
    <App films={films} />,
    document.getElementById(`root`)
);
