import React from "react";
import Meaning from "./Meaning";
import Synonyms from "./Synonyms";
import Phonetics from "./Phonetics";

export default function Result(props) {
  if (props.results) {
    return (
      <div className="Result">
        <h2>{props.results.word}</h2>
        <h5>
          {props.results.phonetics.map(function (phonetic, key) {
            return (
              <div key={key}>
                <Phonetics phonetics={phonetic} />
              </div>
            );
          })}
        </h5>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />

              <Synonyms synonyms={meaning.synonyms} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
