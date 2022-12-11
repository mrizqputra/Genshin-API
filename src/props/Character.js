import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

function GetCharacter() {
//   const [charactersList, setCharactersList] = useState([]);
  const [character, setCharacter] = useState([]);

  // function to get all characters
//   const getCharacters = () => {
//     axios({
//       method: "GET",
//       url: `https://genshin-db-api.vercel.app/api/characters`,
//       params: {
//         query: "names",
//         // dumpResult: false, // The query result will return an object with the properties: { query, folder, match, matchtype, options, filename, result }.
//         // matchNames: false, // Allows the matching of names.
//         // matchAltNames: true, // Allows the matching of alternate or custom names.
//         // matchAliases: false, // Allows the matching of aliases. These are searchable fields that returns the data object the query matched in.
//         matchCategories: true, // Allows the matching of categories. If true, then returns an array if it matches.
//         // verboseCategories: false, // Used if a category is matched. If true, then replaces each string name in the array with the data object instead.
//         // queryLanguages: ["English"], // Array of languages that your query will be searched in.
//         resultLanguage: "English", // Output language that you want your results to be in.
//       },
//       headers: {},
//     })
//       .then(function (response) {
//         console.log(response);
//         setCharactersList(response.data);
//       })
//       .catch(function (err) {
//         console.log(err);
//       });
//   };

//   useEffect(() => {
//     getCharacters();
//   }, []);

  const getCharacterDetail = (item) => {
    // setCharacter(item);
    axios({
      method: "GET",
      url: `https://genshin-db-api.vercel.app/api/characters`,
      params: {
        query: item,
        // dumpResult: false, // The query result will return an object with the properties: { query, folder, match, matchtype, options, filename, result }.
        // matchNames: false, // Allows the matching of names.
        matchAltNames: false, // Allows the matching of alternate or custom names.
        // matchAliases: false, // Allows the matching of aliases. These are searchable fields that returns the data object the query matched in.
        // matchCategories: true, // Allows the matching of categories. If true, then returns an array if it matches.
        // verboseCategories: false, // Used if a category is matched. If true, then replaces each string name in the array with the data object instead.
        // queryLanguages: ["English"], // Array of languages that your query will be searched in.
        resultLanguage: "English", // Output language that you want your results to be in.
      },
      headers: {},
    })
      .then(function (response) {
        console.log(response.data);
        setCharacter(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  useEffect(() => {
    getCharacterDetail();
  }, []);

  return (
    <>
      {/* <div className="container mb-10">
        {charactersList.map((item) => {
          // console.log(item);
          return (
            <>
              <button
                onClick={() => getCharacterDetail(item)}
                className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
              >
                {item}
              </button>
              {/* {character.map((value) => {
                return (
                  <>
                    <div className="row">
                      <div className="text-xl">{value.name}</div>
                    </div>
                  </>
                );
              })} 
            </>
          );
        })}
      </div> */}
      <div className="container character_card">
        <br />
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        {/* <img src={character.images.icon} alt="character icon"/> */}
        {character.name}
        <br />
        {character.fullname}
        <br />
        {character.description}
        <br />
        {character.element}
        <br />
        {character.rarity}
        <br />
        {character.region}
        <br />
        {character.gender}
        <br />
        {character.birthday}
        <br />
        {character.affiliation}
        <br />
        {character.association}
        <br />
        {character.constellation}
        <br />
        {character.weapontype}
      </div>
    </>
  );
}

export default GetCharacter;
