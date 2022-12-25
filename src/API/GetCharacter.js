import axios from "axios";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

function GetCharacter() {
  const [charactersList, setCharactersList] = useState([]);

  useEffect(() => {
      // function to get all characters
    axios({
      method: "GET",
      url: `https://genshin-db-api.vercel.app/api/characters`,
      params: {
        query: "names",
        // dumpResult: false, // The query result will return an object with the properties: { query, folder, match, matchtype, options, filename, result }.
        // matchNames: false, // Allows the matching of names.
        // matchAltNames: true, // Allows the matching of alternate or custom names.
        // matchAliases: false, // Allows the matching of aliases. These are searchable fields that returns the data object the query matched in.
        matchCategories: true, // Allows the matching of categories. If true, then returns an array if it matches.
        // verboseCategories: false, // Used if a category is matched. If true, then replaces each string name in the array with the data object instead.
        // queryLanguages: ["English"], // Array of languages that your query will be searched in.
        resultLanguage: "English", // Output language that you want your results to be in.
      },
      headers: {},
    })
      .then(function (response) {
        console.log(response);
        setCharactersList(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  return (charactersList);
}

export default GetCharacter;