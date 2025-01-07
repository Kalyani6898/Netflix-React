import React, { useCallback, useMemo, useRef, useState } from "react";
import { findNthPrime } from "../util/helper";
import List from "./List";

const Demo = () => {
  const [text, setText] = useState(1);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  console.log("rendering....");
  //const prime = findNthPrime(text);
  const prime = useMemo(() => findNthPrime(text), [text]);
  let x = 0;
  const ref = useRef(0);
  const [Y, setY] = useState(0);
  const getItems = useCallback(() => {
    return [text, text + 1, text + 2];
  }, [text]);
  return (
    <div
      className={
        "border border-black m-4 p-2 w-96 h-96 " +
        (isDarkTheme && "bg-gray-900 text-white")
      }
    >
      Demo
      <div>
        <button
          className="bg-yellow-200 w-52 rounded-lg"
          onClick={() => {
            setIsDarkTheme(!isDarkTheme);
          }}
        >
          Toggle
        </button>
      </div>
      <input
        type="number"
        className="border border-black px-2 w-72 text-black"
        value={text}
        onChange={(e) => {
          setText(parseInt(e.target.value));
        }}
      ></input>
      <div>
        <h1>nTh Prime {prime}</h1>
        <List getItems={getItems} />
      </div>
      <div>
        <button
          className="bg-yellow-200 w-52 rounded-lg px-3 m-4"
          onClick={() => {
            x = x + 1;
            console.log("x =", x);
          }}
        >
          Increment X
        </button>
        <span>{x}</span>
        <button
          className="bg-yellow-200 w-52 rounded-lg px-3 m-4"
          onClick={() => {
            setY(Y + 1);
          }}
        >
          Increment y
        </button>
        <span>{Y}</span>
        <button
          className="bg-yellow-200 w-52 rounded-lg px-3 m-4"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log(ref.current);
          }}
        >
          Increment Ref
        </button>
        <span>{ref.current}</span>
      </div>
    </div>
  );
};

export default Demo;
