import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  let handleOnUpClick = () => {
    console.log("button was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("UpperCase has been enabled", "success");
  };
  let handleOnLowClick = () => {
    let newLowtext = text.toLowerCase();
    setText(newLowtext);
    props.showAlert("LowerCase has been enabled", "success");
  };
  let handleOnClearClick = () => {
    let newtxt = "";
    setText(newtxt);
    props.showAlert("cleartext has been enabled", "success");
  };
  let handleOnDldClick = () => {
    const element = document.createElement("a");
    const file = new Blob([
      document.getElementById("exampleFormControlTextarea1").value,
    ]);
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element);
    element.click();
    props.showAlert("File downloaded successfully", "success");
  };

  let handleOnCopy = () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text have been copied", "success");
  };

  let handleExtraSpaces = () => {
    let newText = text.split("  ");
    setText(newText.join(""));
    props.showAlert("Extra spaces have been removed", "success");
  };
  let handleOnChange = (event) => {
    console.log("changed");
    setText(event.target.value);
  };
  return (
    <>
      <div
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#3c0794" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleOnUpClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleOnLowClick}>
          Convert to Lowercase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleOnClearClick}>
          Clear text
        </button>

        <button className="btn btn-primary mx-2" onClick={handleOnDldClick}>
          Download text
        </button>

        <button className="btn btn-primary mx-2" onClick={handleOnCopy}>
          Copy text
        </button>

        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Space
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          words are {text.split(" ").length} and characters are {text.length}.
        </p>
        <p>{0.08 * text.split(" ").length}Minutes to read</p>
        <h2>preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in textbox to preview it here."}
        </p>
      </div>
    </>
  );
}
