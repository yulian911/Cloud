import React, { useState } from "react";
import { registration } from "../../action/user";
import Input from "../../utils/input/Input";
import "./registration.scss";

function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="registration">
      <div className="registration__header">Rejestracja</div>
      <Input
        value={email}
        setValue={setEmail}
        type="text"
        placeholder="Prosze wpisać email"
      />
      <Input
        value={password}
        setValue={setPassword}
        type="password"
        placeholder="Proszę wpisać hasło"
      />
      <button
        className="registration__btn"
        onClick={() => registration(email, password)}
      >
        Wejscie
      </button>
    </div>
  );
}

export default Registration;
