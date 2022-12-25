import { getValue } from "@testing-library/user-event/dist/utils";
import GetCharacter from "./API/GetCharacter";
import { React, useState } from "react";
import axios from "axios";

function HomePage() {
  const character = GetCharacter(getValue);
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
            {character.map((value) => {
              return (
                <div className="columns-1 text-center">
                  <button
                    onClick={() => getCharacterDetail(value)}
                    className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
                  >
                    {value}
                  </button>
                </div>
              );
            })}
          </div>
          <div className="md:w-3/4">{CharDetail(characterDetail)}</div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
