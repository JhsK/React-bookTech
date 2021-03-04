import React, { useRef, useState } from "react";

const RelayWord = () => {
  const [word, setWord] = useState("테스트");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setWord(value);
      setValue("");
      setResult("정답입니다!");
      inputRef.current.focus();
    } else {
      setValue("");
      setResult("오답입니다.");
      inputRef.current.focus();
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputRef} onChange={onChangeInput} value={value} />
        <button>제출</button>
      </form>
      <div>{result}</div>
    </>
  );
};

export default RelayWord;
