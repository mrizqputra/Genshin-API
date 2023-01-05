import { React, useState, useEffect } from "react";
import axios from "axios";

function CharactersPage() {
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

  const getAllCharacters = () => {
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
  };

  const get5StarCharacters = () => {
    // function to get all characters
    axios({
      method: "GET",
      url: `https://genshin-db-api.vercel.app/api/characters`,
      params: {
        query: "5",
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
  };

  const get4StarCharacters = () => {
    // function to get all characters
    axios({
      method: "GET",
      url: `https://genshin-db-api.vercel.app/api/characters`,
      params: {
        query: "4",
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
  };

  const [characterDetail, setCharacterDetail] = useState(null);

  const getCharacterDetail = (value) => {
    axios({
      method: "GET",
      url: `https://genshin-db-api.vercel.app/api/characters`,
      params: {
        query: value,
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
        setCharacterDetail(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const CharDetail = (characterDetail) => {
    if (characterDetail === null) {
      return null;
    }
    return (
      <div className="container ml-5">
        <img
          className="chrimg"
          alt="chrimg"
          src={characterDetail.images.icon}
        ></img>
        <div className="text-xl">Name: {characterDetail.name}</div>
        <div className="text-xl">Fullname: {characterDetail.fullname}</div>
        <div className="text-xl">
          description: {characterDetail.description}
        </div>
        <div className="text-xl">Element: {characterDetail.element}</div>
        <div className="text-xl">Rarity: {characterDetail.rarity}</div>
        <div className="text-xl">
          Affiliation: {characterDetail.affiliation}
        </div>
        <div className="text-xl">Gender: {characterDetail.gender}</div>
        <div className="text-xl">Title: {characterDetail.title}</div>
        <div className="text-xl">
          Constellation: {characterDetail.constellation}
        </div>
        <div className="text-xl">Weapon-type: {characterDetail.weapontype}</div>
        <div className="text-xl">Region: {characterDetail.region}</div>
        <div className="text-xl">birthday: {characterDetail.birthday}</div>
      </div>
    );
  };

  return (
    <>
      <div className="container mb-10">
        <div className="flex flex-wrap">
          <div className="md:w-1/4 border-r-2 border-blue-900">
            <div className="flex flex-wrap place-content-around">
              <button
                className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
                onClick={() => getAllCharacters()}
              >
                All
              </button>
              <button
                className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
                onClick={() => get5StarCharacters()}
              >
                <div className="flex flex-wrap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  5
                </div>
              </button>
              <button
                className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
                onClick={() => get4StarCharacters()}
              >
                <div className="flex flex-wrap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  4
                </div>
              </button>
            </div>
            {charactersList.map((value) => {
              return (
                // <div className="columns-1 text-center">
                  <button
                    onClick={() => getCharacterDetail(value)}
                    className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
                  >
                    {value}
                  </button>
                // </div>
              );
            })}
          </div>
          <div className="md:w-3/4">{CharDetail(characterDetail)}</div>
        </div>
      </div>
    </>
  );
}

export default CharactersPage;
