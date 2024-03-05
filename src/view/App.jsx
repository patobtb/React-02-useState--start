import { useState } from "react";
import TopBar from "./TopBar";
import NameInput from "./NameInput";
import Conuter from "./counter";


export default function App() {
  const [booksCount, setBooksCount] = useState(2);

  return (
    <div className="app">
      <TopBar>React Components are state machines</TopBar>
      <h1 className="headline white-text">_ ^ _ Stateful Bookstore _ ^ _</h1>
      <Conuter name="Book"/>
      <Conuter name="Customer"/>
      <Conuter name="Employee"/>
      <br />
      <hr />
      <NameInput />
    </div>
  );
}
