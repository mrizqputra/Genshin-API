import axios from "axios";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

function TalentSchedule() {
  const [talentSchedule, setTalentSchedule] = useState([]);

  const materialFunc = () => {
    const date = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];

    const getToday = date[new Date().getDay()];

    axios({
      method: "GET",
      url: `https://genshin-db-api.vercel.app/api/talentmaterialtypes`,
      params: {
        query: getToday,
        // dumpResult: false, // The query result will return an object with the properties: { query, folder, match, matchtype, options, filename, result }.
        // matchNames: false, // Allows the matching of names.
        // matchAltNames: true, // Allows the matching of alternate or custom names.
        // matchAliases: false, // Allows the matching of aliases. These are searchable fields that returns the datLink to="#"object the query matched in.
        matchCategories: true, // Allows the matching of categories. If true, then returns an array if it matches.
        // verboseCategories: false, // Used if Link to="#"category is matched. If true, then replaces each string name in the array with the datLink to="#"object instead.
        // queryLanguages: ["English"], // Array of languages that your query will be searched in.
        resultLanguage: "English", // Output language that you want your results to be in.
      },
      headers: {},
    })
      .then(function (response) {
        console.log(response);
        setTalentSchedule(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  useEffect(() => {
      // function to get all characters
    materialFunc();
  }, []);

  return (talentSchedule.join(', '));
}

export default TalentSchedule;