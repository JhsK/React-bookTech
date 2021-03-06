import React, { useEffect, useRef, useState } from "react";

function RandomNumber() {
  const beginArray = Array(45)
    .fill()
    .map((v, i) => i + 1);
  const shuffle = [];
  while (beginArray.length > 0) {
    const random = Math.floor(Math.random() * beginArray.length);
    const spliceArray = beginArray.splice(random, 1);
    const value = spliceArray[0];
    shuffle.push(value);
  }
  const winBalls = shuffle.slice(0, 6).sort((p, c) => p - c);
  const bonusBall = shuffle[shuffle.length - 1];

  return [...winBalls, bonusBall];
}

const Lotto = () => {
  const [checkNum, setCheckNum] = useState(RandomNumber());
  const [renderNum, setRenderNum] = useState([]);
  const [bonusNum, setBonusNum] = useState(null);
  const [state, setState] = useState(false);
  const intervalReact = useRef([]);

  useEffect(() => {
    console.log(checkNum);
    console.log("useEffect start!");
    for (let i = 0; i < checkNum.length - 1; i++) {
      intervalReact.current[i] = setTimeout(() => {
        console.log("setTimeOut");
        console.log(checkNum[i]);
        setRenderNum((prevRender) => [...prevRender, checkNum[i]]);
        console.log(renderNum);
      }, (i + 1) * 1000);
    }
    intervalReact.current[6] = setTimeout(() => {
      setBonusNum(checkNum[6]);
    }, 7000);
    return () => {
      intervalReact.current.forEach((v) => {
        clearTimeout(v);
      });
    };
  }, [intervalReact.current]);

  return (
    <>
      <div>당첨 숫자</div>
      {renderNum.map((number) => {
        <div className="LottoBall" key={number}>
          {number}
        </div>;
      })}
      {/* {console.log(renderNum)} */}
    </>
  );
};

export default Lotto;
