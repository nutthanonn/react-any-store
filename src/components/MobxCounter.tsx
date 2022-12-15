import React from "react";
import { MobxStore } from "../store/mobxStore";
import { observer } from "mobx-react";

interface MobxCounterProps {
  store: MobxStore;
}

const MobxCounter: React.FC<MobxCounterProps> = observer((props) => {
  return (
    <div>
      <h1>MobX</h1>
      <p>State Change : {Math.random()}</p>
      <div>{props.store.count}</div>
      <button onClick={() => props.store.increment()}>increase</button>
      <button onClick={() => props.store.decrement()}>decrease</button>
    </div>
  );
});

export default MobxCounter;
