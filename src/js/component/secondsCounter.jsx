import React from "react";

const Card = ({ num }) => {
  return (
    <div className="cardBody bg-black text-white mx-2 d-flex justify-content-center align-items-center">
      <span style={{ fontSize: "5vh" }}>{num}</span>
    </div>
  );
};

const SecondsCounter = (props) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="cardBody bg-black text-white mx-2 d-flex justify-content-center align-items-center">
        <i className="fas fa-clock" style={{ fontSize: "4vh" }}></i>
      </div>
      <Card num={Math.floor(props.counter / 100000 % 10)} />
      <Card num={Math.floor(props.counter / 10000 % 10)} />
      <Card num={Math.floor(props.counter / 1000 % 10)} />
      <Card num={Math.floor(props.counter / 100 % 10)} />
      <Card num={Math.floor(props.counter / 10 % 10)} />
      <Card num={props.counter % 10} />
    </div>
  );
};

export { Card, SecondsCounter };
