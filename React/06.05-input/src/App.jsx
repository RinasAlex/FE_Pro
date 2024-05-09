import { useState } from "react";
import "./App.css";


function App() {
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isOpened, setIsOpened] = useState(false)
  const onLoginChange = (e) => {
    setLoginValue(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };
  

  return (
    <>
      <input type="text" value={loginValue} onChange={onLoginChange} />
      <input type="text" value={passwordValue} onChange={onPasswordChange} />
      <button
        onClick={() =>
          console.log({ name: loginValue, password: passwordValue })
        }
      >
        click
      </button>
      {
        5 > 3 ? <strong>Its more</strong> : <strong>Its less</strong>
      }
      {
        isOpened && <div>this is sort of accordion text</div>
      }
      <button onClick={() => setIsOpened(!isOpened)}>accordion</button>
    </>
  );
}

export default App;
