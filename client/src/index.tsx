import React from 'react';
import ReactDOM from 'react-dom';

const isLocalhost = () => {
    const { origin: currentLocation } = window.location
    if (currentLocation.includes('localhost')) {
        return true;
    };

    return false;
}

const onClick = () => {
    const mathForm = document.getElementById("mathForm") as HTMLInputElement;

    window.open(isLocalhost() ? `http://localhost:3001/calculate?query=${mathForm.value}` : `futurice-calculator.app/calculate?query=${mathForm.value}`, "_blank").focus();
}

ReactDOM.render(
    <div>
        <form onSubmit={onClick}>
            Enter base64 encoded math: <input id="mathForm" type="text"></input>
            <button onClick={onClick}>Click me to calculate</button>
        </form>
        <div>You can base64 encode your equation <a href="https://www.base64encode.org/" target="_blank">here</a>.</div>
    </div>,
    document.getElementById('root')
);
