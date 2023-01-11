import React from "react";
import AudioPhonetics from "./AudioPhonetics";

import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <AudioPhonetics audio={props.phonetics.audio} />
      <div className="phonetics-text">{props.phonetics.text}</div>
    </div>
  );
}
