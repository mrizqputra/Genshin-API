import { React, useState, useEffect } from "react";
import axios from "axios";

function ArtifactsPage() {
  const [ArtifactsList, setArtifactsList] = useState([]);

  useEffect(() => {
    // function to get all Artifacts
    axios({
      method: "GET",
      url: `https://genshin-db-api.vercel.app/api/Artifacts`,
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
        setArtifactsList(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  const getAllArtifacts = () => {
    // function to get all Artifacts
    axios({
      method: "GET",
      url: `https://genshin-db-api.vercel.app/api/Artifacts`,
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
        setArtifactsList(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const get5StarArtifacts = () => {
    // function to get all Artifacts
    axios({
      method: "GET",
      url: `https://genshin-db-api.vercel.app/api/Artifacts`,
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
        setArtifactsList(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const get4StarArtifacts = () => {
    // function to get all Artifacts
    axios({
      method: "GET",
      url: `https://genshin-db-api.vercel.app/api/Artifacts`,
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
        setArtifactsList(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const get3StarArtifacts = () => {
    // function to get all Artifacts
    axios({
      method: "GET",
      url: `https://genshin-db-api.vercel.app/api/Artifacts`,
      params: {
        query: "3",
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
        setArtifactsList(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const get2StarArtifacts = () => {
    // function to get all Artifacts
    axios({
      method: "GET",
      url: `https://genshin-db-api.vercel.app/api/Artifacts`,
      params: {
        query: "2",
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
        setArtifactsList(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const get1StarArtifacts = () => {
    // function to get all Artifacts
    axios({
      method: "GET",
      url: `https://genshin-db-api.vercel.app/api/Artifacts`,
      params: {
        query: "1",
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
        setArtifactsList(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const [ArtifactDetail, setArtifactDetail] = useState(null);

  const getArtifactDetail = (value) => {
    axios({
      method: "GET",
      url: `https://genshin-db-api.vercel.app/api/Artifacts`,
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
        setArtifactDetail(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const WrapArtifactDetail = (ArtifactDetail) => {
    if (ArtifactDetail === null) {
      return null;
    }
    return (
      <div className="container ml-5">
        <div className="text-xl">Name: {ArtifactDetail.name}</div>
        <div className="grid">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            alt="flower_img"
            src={ArtifactDetail.images.flower}
          ></img>
          <div className="text-xl">Name: {ArtifactDetail.flower.name}</div>
          <div className="text-xl">
            Relictype: {ArtifactDetail.flower.relictype}
          </div>
          <div className="text-xl">
            Description: {ArtifactDetail.flower.description}
          </div>
          <div className="text-xl">Story: {ArtifactDetail.flower.story}</div>
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            alt="plume_img"
            src={ArtifactDetail.images.plume}
          ></img>
          <div className="text-xl">Name: {ArtifactDetail.plume.name}</div>
          <div className="text-xl">
            Relictype: {ArtifactDetail.plume.relictype}
          </div>
          <div className="text-xl">
            Description: {ArtifactDetail.plume.description}
          </div>
          <div className="text-xl">Story: {ArtifactDetail.plume.story}</div>
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            alt="sands_img"
            src={ArtifactDetail.images.sands}
          ></img>
          <div className="text-xl">Name: {ArtifactDetail.sands.name}</div>
          <div className="text-xl">
            Relictype: {ArtifactDetail.sands.relictype}
          </div>
          <div className="text-xl">
            Description: {ArtifactDetail.sands.description}
          </div>
          <div className="text-xl">Story: {ArtifactDetail.sands.story}</div>
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            alt="goblet_img"
            src={ArtifactDetail.images.goblet}
          ></img>
          <div className="text-xl">Name: {ArtifactDetail.goblet.name}</div>
          <div className="text-xl">
            Relictype: {ArtifactDetail.goblet.relictype}
          </div>
          <div className="text-xl">
            Description: {ArtifactDetail.goblet.description}
          </div>
          <div className="text-xl">Story: {ArtifactDetail.goblet.story}</div>
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            alt="circlet_img"
            src={ArtifactDetail.images.circlet}
          ></img>
          <div className="text-xl">Name: {ArtifactDetail.circlet.name}</div>
          <div className="text-xl">
            Relictype: {ArtifactDetail.circlet.relictype}
          </div>
          <div className="text-xl">
            Description: {ArtifactDetail.circlet.description}
          </div>
          <div className="text-xl">Story: {ArtifactDetail.circlet.story}</div>
        </div>
        <div className="text-xl">
          2 set piece effect bonus: {ArtifactDetail["2pc"]}
        </div>
        <div className="text-xl">
          4 set piece effect bonus: {ArtifactDetail["4pc"]}
        </div>
        <div className="text-xl">
          Rarity: {ArtifactDetail.rarity[0]} & {ArtifactDetail.rarity[1]}
        </div>
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
                onClick={() => getAllArtifacts()}
              >
                All
              </button>
              <button
                className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
                onClick={() => get5StarArtifacts()}
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
                onClick={() => get4StarArtifacts()}
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
              <button
                className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
                onClick={() => get3StarArtifacts()}
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
                  3
                </div>
              </button>
              <button
                className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
                onClick={() => get2StarArtifacts()}
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
                  2
                </div>
              </button>
              <button
                className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
                onClick={() => get1StarArtifacts()}
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
                  1
                </div>
              </button>
            </div>
            {ArtifactsList.map((value) => {
              return (
                // <div className="columns-1 text-center">
                <button
                  onClick={() => getArtifactDetail(value)}
                  className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
                >
                  {value}
                </button>
                // </div>
              );
            })}
          </div>
          <div className="md:w-3/4">{WrapArtifactDetail(ArtifactDetail)}</div>
        </div>
      </div>
    </>
  );
}

export default ArtifactsPage;
