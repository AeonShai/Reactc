import "./App.css";
import React from "react";
import Header from "./components/Header";

const name = "Ilgın";
const surname = "Çutok";
const isLoggedIn = false;

function App() {
  // return React.createElement("div", null, "Hello");

  return (
    <div>
      <h1>{isLoggedIn && `Merhaba ${name} ${surname}`}</h1>
      {isLoggedIn ? <Header /> : <div>Giriş Yapınız</div>}
    </div>
  );
}

export default App;
