import { useState } from "react";

export default function Conuter(props) {
  const [counter, setCounter] = useState(0);

  return (
    <div className="hbox space-between mt20">
      <h3 className="paragraph">
        {props.name} counter: {counter}
      </h3>
      <button className="button" onClick={() => setCounter(counter + 1)}>
        add Book
      </button>
    </div>
  );
}
