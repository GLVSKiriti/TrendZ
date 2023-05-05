import { Send } from "@material-ui/icons";
import React from "react";
import "./NewsLetter.css";

function NewsLetter() {
  return (
    <div className="NewsLetter">
      <h1 className="NewsLetterTitle">NewsLetter</h1>
      <div className="NewsLetterDescription">
        Get timely updates from your favorite products
      </div>
      <div className="NewsLetterInputContainer">
        <input
          type="text"
          placeholder="Enter Your Email"
          className="NewsLetterInput"
        />
        <button className="NewsLetterButton">
          <Send />
        </button>
      </div>
    </div>
  );
}

export default NewsLetter;
