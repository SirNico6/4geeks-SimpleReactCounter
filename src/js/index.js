//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
//import Home from "./component/home.jsx";
import { SecondsCounter } from "./component/secondsCounter.jsx";
let seconds = 0;
let interval;
let clockwise = true;

let app = ReactDOM.createRoot(document.getElementById("app"));
const renderSecondsCounter = () => {
    if (clockwise) {
        seconds++;
    } else {
        seconds--;
    }

    app.render(
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
            <div className="d-flex justify-content-center bg-white p-4 rounded shadow gap-2">
                <SecondsCounter counter={seconds} />
            </div>

            <div className="mt-4 w-50">
                <input
                    id="countDown"
                    className="form-control form-control-lg mb-3"
                    onChange={(event) => {
                        seconds = event.target.value;
                    }}
                    placeholder="Enter seconds"
                    type="number"
                />
                <div className="d-flex justify-content-between">
                    <button
                        onClick={() => {
                            clearInterval(interval);
                            interval = undefined;
                        }}
                        type="button"
                        className="btn btn-secondary w-100 mx-1"
                    >
                        Pause
                    </button>
                    <button
                        onClick={() => {
                            seconds = 0;
                            document.querySelector("#countDown").value = undefined;
                        }}
                        type="button"
                        className="btn btn-secondary w-100 mx-1"
                    >
                        Reset
                    </button>
                    <button
                        onClick={() => {
                            if (!interval) {
                                interval = setInterval(renderSecondsCounter, 1000);
                            }
                        }}
                        type="button"
                        className="btn btn-secondary w-100 mx-1"
                    >
                        Continue
                    </button>
                    <button
                        onClick={() => {
                            clockwise = !clockwise;
                        }}
                        type="button"
                        className="btn btn-primary w-100 mx-1"
                    >
                        {clockwise ? "Clockwise" : "Counterclockwise"}
                    </button>
                </div>
            </div>
        </div>
    );



    if (seconds <= 0) {
        alert("Count down ended");
        clearInterval(interval);
    }
};

renderSecondsCounter();
interval = setInterval(renderSecondsCounter, 1000);
