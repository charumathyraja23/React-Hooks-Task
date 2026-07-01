import React, { useState, useMemo, useEffect, useCallback } from "react";

function App() {

  // useMemo Task
  const [number, setNumber] = useState(0);

  const result = useMemo(() => {
    return number * 2;
  }, [number]);

  // useEffect Task
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    if (displayName !== "") {
      alert("Welcome " + displayName);
    }
  }, [displayName]);

  const showName = () => {
    setDisplayName(name);
  };

  // useCallback Task
  const [message, setMessage] = useState("");

  const showWelcome = useCallback(() => {
    setMessage("Welcome Student!");
  }, []);

  const clearMessage = useCallback(() => {
    setMessage("");
  }, []);

  return (
    <div>

      {/* useMemo */}
      <h2>useMemo Example</h2>

      <h3>Number: {number}</h3>

      <h3>Result: {result}</h3>

      <button onClick={() => setNumber(number + 1)}>
        Increase
      </button>

      <hr />

      {/* useEffect */}
      <h2>useEffect Example</h2>

      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <button onClick={showName}>
        Display Name
      </button>

      <h3>Welcome {displayName}</h3>

      <hr />

      {/* useCallback */}
      <h2>Hello Students</h2>

      <button onClick={showWelcome}>
        Show Message
      </button>

      <button onClick={clearMessage}>
        Clear Message
      </button>

      <h3>{message}</h3>

    </div>
  );
}

export default App;