// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.scss";
import Nav from "./components/Nav/Nav";
import Reading from "./components/Reading/Reading";

function App() {
  // const [count, setCount] = useState(0)
  let notice = {
    len: 5,
  };
  return (
    <>
      <Nav notice={notice} />
      <Reading />
    </>
  );
}

export default App;
