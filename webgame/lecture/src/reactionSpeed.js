import React, { useRef, useState } from "react";
import "./reactionSpeed.css";

const ReactionSpeed = () => {
  const [state, setState] = useState("wating");
  const [result, setResult] = useState([]);
  const [title, setTitle] = useState("클릭해서 시작하세요");
  const randomGreen = useRef(null);
  const startTime = useRef();
  const endTime = useRef();

  const onClickScreen = () => {
    console.log(typeof state);
    if (state === "wating") {
      setState("ready");
      setTitle("초록색이 나오면 클릭하세요");

      randomGreen.current = setTimeout(() => {
        setState("now");
        setTitle("클릭하세요");
      }, Math.floor(Math.random() * 1000) + 2000);
      startTime.current = new Date();
    } else if (state === "ready") {
      setState("wating");
      setTitle("성급하셨군요! 초록색이 나오면 클릭하세요");
      clearTimeout(randomGreen.current);
    } else if (state === "now") {
      setState("wating");
      setTitle("클릭해서 시작하세요");
      endTime.current = new Date();
      setResult((preResult) => {
        return [...preResult, endTime.current - startTime.current];
      });
    }
  };

  const AvgSpeed = () => {
    return result.length === 0 ? null : (
      <>
        <div>평균 시간: {result.reduce((a, c) => a + c) / result.length}ms</div>
      </>
    );
  };
  return (
    <>
      <div id="section" className={state} onClick={onClickScreen}>
        {title}
      </div>
      {AvgSpeed()}
    </>
  );
};

export default ReactionSpeed;
