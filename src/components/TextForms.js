import React, { useState } from "react";

export default function TextForms(props) {
  const handleUpClick = () => {
    if (document.querySelector("#myBox").value !== "") {
      let newText = text.toUpperCase();
      setText(newText);
    }
  };

  const handleLoClick = () => {
    if (document.querySelector("#myBox").value !== "") {
      let newText = text.toLowerCase();
      setText(newText);
    }
  };

  const removeExtraSpaces = () => {
    if (document.querySelector("#myBox").value !== "") {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
    }
  };

  const clearText = () => {
    if (document.querySelector("#myBox").value !== "") {
      let newText = "";
      setText(newText);
    }
  };

  const speakText = () => {
    const synth = window.speechSynthesis;
    const synthUtterence = new SpeechSynthesisUtterance(text);
    synth.speak(synthUtterence);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const copyText = () => {
    if (document.querySelector("#myBox").value !== "") {
      let copyBtn = document.querySelector(".copy");
      copyBtn.innerText = "Copied";
      let newText = text;
      navigator.clipboard.writeText(newText);
      setTimeout(() => {
        copyBtn.innerText = "Copy Text";
      }, 1000);
    }
  };

  const [darkMode, setDarkMode] = useState({
    background: "white",
    color: "black",
  });

  const [text, setText] = useState("");
  //   text = "Jibris"; // wrong way to change the state
  //   setText("Jibris"); // correct way to change the state
  return (
    <>
      <div className="body">
        <div className="container my-4">
          <div className="mb-3">
            <h4
              style={{ color: props.mode === "dark" ? "white" : "black" }}
              className="form-label"
            >
              {props.heading}
            </h4>
            <textarea
              style={{
                background: props.mode === "light" ? "white" : "#2B3035",
                color: props.mode === "dark" ? "white" : "black",
              }}
              value={text}
              className="form-control"
              id="myBox"
              rows="6"
              onChange={handleOnChange}
            ></textarea>
          </div>
          <button
            className={`btn btn-${
              props.mode === "light" ? "primary" : "primary"
            }`}
            onClick={handleUpClick}
          >
            Convert To Uppercase
          </button>
          <button
            className={`btn btn-${
              props.mode === "light" ? "success" : "success"
            }`}
            onClick={handleLoClick}
          >
            Convert To Lowercase
          </button>
          <button
            className={`btn btn-${
              props.mode === "light" ? "secondary" : "secondary"
            }`}
            onClick={removeExtraSpaces}
          >
            Remove Extra Spaces
          </button>
          <button
            className={`btn btn-${
              props.mode === "light" ? "danger" : "danger"
            }`}
            onClick={speakText}
          >
            Speak Text
          </button>
          <button
            className={`btn copy btn-${
              props.mode === "light" ? "success" : "success"
            }`}
            onClick={copyText}
          >
            Copy Text
          </button>
          <button
            className={`btn btn-${
              props.mode === "light" ? "primary" : "primary"
            }`}
            onClick={clearText}
          >
            Clear Text
          </button>
        </div>
        <div
          className="container"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <h5>Your Text Summary</h5>
          <p>
            {text.length === 0 ? "0" : text.split(" ").length} words and{" "}
            {text.length} characters
          </p>
          <p>
            {text.length === 0 ? 0 : 0.008 * text.split(" ").length} minutes
            read
          </p>

          <h4>Preview</h4>
          <p>
            {text.length > 0
              ? text
              : "Enter something to the above text box to preview here"}
          </p>
        </div>
      </div>
    </>
  );
}
