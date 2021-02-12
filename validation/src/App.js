// import validator from 'validator'
import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

//onEventName =

function App() {
  const [first, setFirst] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [website, setWebsite] = useState("");

  // const [text, setText] = useState("");
  // const [select, setSelect] = useState("");
  function resetForm() {
    setFirst("");
    // setText("");
    setEmail("");
    return;
  }
  function submitForm(e) {
    if (password != confirmPassword) {
      e.preventDefault();
      alert(`Passwords Don't Match`);
    } else {
      alert("Form Was Submitted Successfully");
    }
  }
  return (
    <div className="container">
      <h1>Profile Form-All Fields Required</h1>
      <h2>{first}</h2>
      <div className="signUp">
        {/* <p>{text}</p> */}
        {/* <h4>{select}</h4> */}

        <button onClick={resetForm}>reset</button>
        <form onSubmit={submitForm}>
          <div>
            <label>Name</label>
            <input
              required
              placeholder="your name here"
              type="text"
              name="firstname"
              // value={first}
              onChange={(e) => setFirst(e.target.value)}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              required
              placeholder="your email here"
              type="email"
              name="E-mail"
              // value={first}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>UserName</label>
            <input
              required
              placeholder="your userName here"
              type="text"
              name="UserName"
              // value={first}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              required
              placeholder="your password here"
              type="password"
              name="Password"
              // value={first}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              required
              placeholder="Confirm your password here"
              type="password"
              name="Confirm Password"
              // value={first}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div>
            <label>Website</label>
            <input
              required
              placeholder="http://your-Website.com"
              type="url"
              name="Website"
              // value={first}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>

          {/* <textarea
          type="text"
          name="firstname"
          // value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <select name="" id="" onChange={(e) => setSelect(e.target.value)}>
          <option value="">Make A Selection</option>
          <option value="hello">hello</option>
          <option value="bye">bye</option>
        </select> */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
