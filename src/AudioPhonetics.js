import React from "react";

export default function AudioPhonetics(props) {
  function play() {
    new Audio(props.audio).play();
  }

  return (
    <div className="AudioPhonetics">
      <button onClick={play}>Listen</button>
    </div>
  );
}
