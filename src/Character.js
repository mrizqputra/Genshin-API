import { React, useState, useEffect } from "react";
import axios from "axios";
import Sticker5 from "./img/sticker_5.png";

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
      return (
        <>
          <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                  Before they sold out
                </h1>
                <p class="mb-8 leading-relaxed">
                  Copper mug try-hard pitchfork pour-over freegan heirloom
                  neutra air plant cold-pressed tacos poke beard tote bag.
                  Heirloom echo park mlkshk tote bag selvage hot chicken
                  authentic tumeric truffaut hexagon try-hard chambray.
                </p>
                <div class="flex justify-center">
                  <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Button
                  </button>
                  <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                    Button
                  </button>
                </div>
              </div>
              <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                  class="object-cover object-center rounded"
                  alt="hero"
                  src={Sticker5}
                />
              </div>
            </div>
          </section>
        </>
      );
    }
    return (
      <div className="container ml-5">
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto flex flex-col">
            <div class="mx-auto">
              <div class="flex flex-col sm:flex-row mt-10">
                <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div class="w-40 h-40 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                    <img
                      className="chrimg"
                      alt="chrimg"
                      src={characterDetail.images.icon}
                    ></img>
                  </div>
                  <div class="flex flex-col items-center text-center justify-center">
                    <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                      {characterDetail.fullname}
                    </h2>
                    <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                    <p class="text-base">{characterDetail.element}</p>
                    <p class="text-base">
                      <div className="inline-flex">
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
                        {characterDetail.rarity}
                      </div>
                    </p>
                    <p class="text-base">{characterDetail.element}</p>
                  </div>
                </div>
                <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <p class="leading-relaxed text-xl mb-4">
                  {characterDetail.description}
                  </p>
                  <a class="text-indigo-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">Raw Denim Heirloom Man Braid
              <br class="hidden sm:block"/>Selfies Wayfarers
            </h1>
            <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div class="p-4 md:w-1/3 flex">
                <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div class="flex-grow pl-6">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Shooting Stars</h2>
                  <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
                  <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="p-4 md:w-1/3 flex">
                <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <div class="flex-grow pl-6">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-2">The Catalyzer</h2>
                  <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
                  <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="p-4 md:w-1/3 flex">
                <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div class="flex-grow pl-6">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Neptune</h2>
                  <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
                  <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
         
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
