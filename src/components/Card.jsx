import React, { useState } from "react";
import { fakeUseState } from "../fakeHooks";

// function Card(props) {
//   return <div className={`${props.color} w-40 h-60`}>{props.cardName}</div>;
// }

// function Card({ color, cardName }) {
//   return <div className={`${color} w-40 h-60`}>{cardName}</div>;
// }

// useState 활용법

// function Card({ color, cardName }) {
//   const [count, setCount] = React.useState();

//   return <div className={`${color} w-40 h-60`}>{cardName}</div>;
// }

function Card({ color, cardName }) {
  const [count, setCount] = useState();
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  // 위에는 배열, 아래는 객체
  const { setValue, value } = fakeUseState();
  const { setValue: setNum3, value: num3 } = fakeUseState();
  const { setValue: setNum4, value: num4 } = fakeUseState();

  return <div className={`${color} w-40 h-60`}>{cardName}</div>;
}

export default Card;
