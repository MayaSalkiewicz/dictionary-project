import React, { useState } from "react";
import axios from "axios";

import Result from "./Result";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyWord, setKeyword] = useState("happiness");
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResult(response.data[0]);
  }

  function Search() {
    setLoaded(true);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function searchWordMeaning(event) {
    event.preventDefault();
    Search();
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>Which word would you like to know? </h1>
          <form onSubmit={searchWordMeaning}>
            <input
              onChange={handleChange}
              type="search"
              placeholder="Type a word ..."
            />
          </form>
          <div className="hint">self-love, happiness, yoga, hobby, wine...</div>
        </section>
        <Result results={result} />
      </div>
    );
  } else {
    return Search();
  }
}
