import React, { useState } from "react";
import axios from "axios";

import Result from "./Result";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyWord, setKeyword] = useState("happiness");
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResult(response.data[0]);
  }

  function handlePhotoResponse(response) {
    console.log(response.data.photos);
    setPhotos(response.data.photos);
  }

  function Search() {
    setLoaded(true);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);

    let PexelsApiKey =
      "563492ad6f917000010000011743225eedc94edd8e4b8f6557fc36b9";
    let apiPexelsUrl = `https://api.pexels.com/v1/search?query=${keyWord}&per_page=9`;
    let headers = { Authorization: `Bearer ${PexelsApiKey}` };
    axios.get(apiPexelsUrl, { headers: headers }).then(handlePhotoResponse);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    return Search();
  }
}
