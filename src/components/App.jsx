import React from "react";
import Form from "./Form.jsx";

var isLoggedIn = false;
var userIsRegistered = false;

const currentTime = new Date().getHours();

function App() {
  return (
    <div className="container">{
        isLoggedIn ? <h1>Hello!</h1> : <Form isRegistered={userIsRegistered} />
    }
    </div>
  );
}

export default App;
