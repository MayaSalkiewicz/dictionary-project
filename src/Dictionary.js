import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function searchWordMeaning(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
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
