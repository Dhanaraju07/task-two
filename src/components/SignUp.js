import React, { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const signUpHandler = () => {
    if (name && email && password !== "") {
      alert("Successfully Signed In");
    } else {
      alert("Please Enter your details");
    }
  };

  const handleName = (e) => {
    setName(e.target.value);
    setNameErr("");
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordErr("");
  };

  const handleNameError = () => {
    if (name === "") {
      setNameErr("Please Enter your Name");
    }
  };

  const handleEmailError = () => {
    if (email === "") {
      setEmailErr("Please Enter your email");
    }
  };

  const handlePasswordError = () => {
    if (password === "") {
      setPasswordErr("Please Enter your password");
    }
  };
  return (
    <div
      style={{
        backgroundColor: "blue",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          minHeight: "60vh",
          backgroundSize: "cover",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Create Account</h1>
        <div
          style={{ display: "flex", flexDirection: "column", padding: "6px" }}
        >
          <label>Name</label>
          <input
            type="text"
            value={name}
            onBlur={handleNameError}
            onChange={handleName}
            style={{ height: "40px", width: "20vw" }}
          />
          {nameErr && <p style={{ color: "red" }}>{nameErr}</p>}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "6px",
            backgroundSize: "cover",
          }}
        >
          <label>Email</label>
          <input
            type="email"
            value={email}
            onBlur={handleEmailError}
            onChange={handleEmail}
            style={{ height: "40px", width: "20vw" }}
          />
          {emailErr && <p style={{ color: "red" }}>{emailErr}</p>}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundSize: "cover",
            padding: "6px",
          }}
        >
          <label>Password</label>
          <input
            type="password"
            value={password}
            onBlur={handlePasswordError}
            onChange={handlePassword}
            style={{ height: "40px", width: "20vw" }}
          />
          {passwordErr && <p style={{ color: "red" }}>{passwordErr}</p>}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "20px",
            backgroundSize: "cover",
            padding: "6px",
          }}
        >
          <button
            style={{ height: "30px", width: "120px", marginRight: "22px" }}
            onClick={signUpHandler}
          >
            Sign Up
          </button>
          <button style={{ height: "30px", width: "120px", marginLeft: "8px" }}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
