import { getValue } from "@testing-library/user-event/dist/utils";
import GetCharacter from "./props/GetCharacter";
// import CharacterDetail from "./props/Character";
import { React,  } from "react";
// import axios from "axios";


function HomePage() {
  //   console.log(GetCharacter(getValue));
  const character = GetCharacter(getValue);
  // const characterContext = React.createContext('names');
  // console.log(`this value of char detail ${characterContext}`);

  // const getCharacterDetail = (value) => {
  //   // setCharacterDetail(value);
  //   axios({
  //     method: "GET",
  //     url: `https://genshin-db-api.vercel.app/api/characters`,
  //     params: {
  //       query: value,
  //       // dumpResult: false, // The query result will return an object with the properties: { query, folder, match, matchtype, options, filename, result }.
  //       // matchNames: false, // Allows the matching of names.
  //       matchAltNames: false, // Allows the matching of alternate or custom names.
  //       // matchAliases: false, // Allows the matching of aliases. These are searchable fields that returns the data object the query matched in.
  //       // matchCategories: true, // Allows the matching of categories. If true, then returns an array if it matches.
  //       // verboseCategories: false, // Used if a category is matched. If true, then replaces each string name in the array with the data object instead.
  //       // queryLanguages: ["English"], // Array of languages that your query will be searched in.
  //       resultLanguage: "English", // Output language that you want your results to be in.
  //     },
  //     headers: {},
  //   })
  //     .then(function (response) {
  //       console.log(response.data);
  //       // characterContext(response.data);
  //     })
  //     .catch(function (err) {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   getCharacterDetail();
  // }, []);

  return (
    <>
      <div className="container mb-10">
        {character.map((value) => {
          return (
            <button
              // onClick={() => getCharacterDetail(value)}
              className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
            >
              {value}
            </button>
          );
        })}
      </div>
      {/* {characterDetail.map((character) => {
        return (
          <div className="text-center">{character.name}</div>
        );
      })} */}
    </>
  );
}

export default HomePage;
