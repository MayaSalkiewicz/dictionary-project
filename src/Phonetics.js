import React from "react";
import AudioPhonetics from "./AudioPhonetics";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      {props.phonetics.text}
      <AudioPhonetics audio={props.phonetics.audio} />
    </div>
  );
}
