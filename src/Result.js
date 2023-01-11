import React from "react";
import Meaning from "./Meaning";
import Synonyms from "./Synonyms";
import Phonetics from "./Phonetics";

import "./Result.css";

export default function Result(props) {
  if (props.results) {
    return (
      <div className="Result">
        <section>
          <h2>{props.results.word}</h2>
          <div>
            {props.results.phonetics.map(function (phonetic, key) {
              return (
                <div key={key}>
                  <Phonetics phonetics={phonetic} />
                </div>
              );
            })}
          </div>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />

              <Synonyms synonyms={meaning.synonyms} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
