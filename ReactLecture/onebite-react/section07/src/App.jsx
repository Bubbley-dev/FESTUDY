import { useEffect, useRef, useState } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false)

  // 1. 마운트 : 탄생
  useEffect(()=>{
    console.log("mount");
  }, [])  // deps 빈 배열 === onMount

  // 2. 업데이트 : 변화, 리렌더링
  useEffect(()=>{
    if (!isMount.current) {
      isMount.current = true
      return
    }
    console.log("update");
  })  // deps 생략

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
