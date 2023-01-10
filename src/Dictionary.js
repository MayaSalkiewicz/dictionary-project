import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");
  function searchWordMeaning(event) {
    event.preventDefault();
    alert(`Search ${keyWord}`);
  }

  function handleChange(event) {
    setKeyWord(event.target.value);
  }

  return (
    <div>
      <form onSubmit={searchWordMeaning}>
        <input
          onChange={handleChange}
          type="search"
          placeholder="Type a word ..."
        />
      </form>
    </div>
  );
}
