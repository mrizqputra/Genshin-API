import { React, useState, useEffect } from "react";
import axios from "axios";

function WeaponsPage() {
  const [weaponsList, setweaponsList] = useState([]);

  useEffect(() => {
    // function to get all weapons
    axios({
      method: "GET",
      url: `https://genshin-db-api.vercel.app/api/weapons`,
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
        setweaponsList(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  const getAllWeapons = () => {
    // function to get all weapons
    axios({
      method: "GET",
      url: `https://genshin-db-api.vercel.app/api/weapons`,
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
        setweaponsList(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const get5StarWeapons = () => {
    // function to get all weapons
    axios({
      method: "GET",
      url: `https://genshin-db-api.vercel.app/api/weapons`,
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
        setweaponsList(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const get4StarWeapons = () => {
    // function to get all weapons
    axios({
      method: "GET",
      url: `https://genshin-db-api.vercel.app/api/weapons`,
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
        setweaponsList(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const get3StarWeapons = () => {
    // function to get all weapons
    axios({
      method: "GET",
      url: `https://genshin-db-api.vercel.app/api/weapons`,
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
        setweaponsList(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const get2StarWeapons = () => {
    // function to get all weapons
    axios({
      method: "GET",
      url: `https://genshin-db-api.vercel.app/api/weapons`,
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
        setweaponsList(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const get1StarWeapons = () => {
    // function to get all weapons
    axios({
      method: "GET",
      url: `https://genshin-db-api.vercel.app/api/weapons`,
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
        setweaponsList(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  const [WeaponDetail, setWeaponDetail] = useState(null);

  const getWeaponDetail = (value) => {
    axios({
      method: "GET",
      url: `https://genshin-db-api.vercel.app/api/weapons`,
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
        setWeaponDetail(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const WrapWeaponDetail = (WeaponDetail) => {
    const rarityDetail = () => {
      if (WeaponDetail.rarity <= 2) {
        return null;
      }
      return (
        <>
          <div className="mx-auto bg-white shadow">
            <div className="mb-6 border-b border-slate-200 pb-2 text-base font-semibold">
              Refine Status Detail
            </div>
            <input
              id="published"
              class="peer/refine_1 form-radio mr-2 mb-0.5 ml-4 border-slate-300 text-sky-400 focus:ring-sky-300"
              type="radio"
              name="status"
            />
            <label
              for="published"
              className="peer-checked/published:text-sky-500 font-medium"
            >
              Refine 1
            </label>
            <input
              id="published"
              class="peer/refine_2 form-radio mr-2 mb-0.5 ml-4 border-slate-300 text-sky-400 focus:ring-sky-300"
              type="radio"
              name="status"
            />
            <label
              for="published"
              className="peer-checked/published:text-sky-500 font-medium"
            >
              Refine 2
            </label>
            <input
              id="published"
              class="peer/refine_3 form-radio mr-2 mb-0.5 ml-4 border-slate-300 text-sky-400 focus:ring-sky-300"
              type="radio"
              name="status"
            />
            <label
              for="published"
              className="peer-checked/published:text-sky-500 font-medium"
            >
              Refine 3
            </label>
            <input
              id="published"
              class="peer/refine_4 form-radio mr-2 mb-0.5 ml-4 border-slate-300 text-sky-400 focus:ring-sky-300"
              type="radio"
              name="status"
            />
            <label
              for="published"
              className="peer-checked/published:text-sky-500 font-medium"
            >
              Refine 4
            </label>
            <input
              id="published"
              class="peer/refine_5 form-radio mr-2 mb-0.5 ml-4 border-slate-300 text-sky-400 focus:ring-sky-300"
              type="radio"
              name="status"
            />
            <label
              for="published"
              className="peer-checked/published:text-sky-500 font-medium"
            >
              Refine 5
            </label>
            <div className="hidden peer-checked/refine_1:block text-xl">
              Effect on Refine 1:{" "}
              {WeaponDetail.effect
                .split("{0}")
                .join(WeaponDetail.r1[0])
                .split("{1}")
                .join(WeaponDetail.r1[1])
                .split("{2}")
                .join(WeaponDetail.r1[2])
                .split("{3}")
                .join(WeaponDetail.r1[3])}
            </div>
            <div className="hidden peer-checked/refine_2:block text-xl">
              Effect on Refine 2:{" "}
              {WeaponDetail.effect
                .split("{0}")
                .join(WeaponDetail.r2[0])
                .split("{1}")
                .join(WeaponDetail.r2[1])
                .split("{2}")
                .join(WeaponDetail.r2[2])
                .split("{3}")
                .join(WeaponDetail.r2[3])}
            </div>
            <div className="hidden peer-checked/refine_3:block text-xl">
              Effect on Refine 3:{" "}
              {WeaponDetail.effect
                .split("{0}")
                .join(WeaponDetail.r3[0])
                .split("{1}")
                .join(WeaponDetail.r3[1])
                .split("{2}")
                .join(WeaponDetail.r3[2])
                .split("{3}")
                .join(WeaponDetail.r3[3])}
            </div>
            <div className="hidden peer-checked/refine_4:block text-xl">
              Effect on Refine 4:{" "}
              {WeaponDetail.effect
                .split("{0}")
                .join(WeaponDetail.r4[0])
                .split("{1}")
                .join(WeaponDetail.r4[1])
                .split("{2}")
                .join(WeaponDetail.r4[2])
                .split("{3}")
                .join(WeaponDetail.r4[3])}
            </div>
            <div className="hidden peer-checked/refine_5:block text-xl">
              Effect on Refine 5:{" "}
              {WeaponDetail.effect
                .split("{0}")
                .join(WeaponDetail.r5[0])
                .split("{1}")
                .join(WeaponDetail.r5[1])
                .split("{2}")
                .join(WeaponDetail.r5[2])
                .split("{3}")
                .join(WeaponDetail.r5[3])}
            </div>
          </div>
        </>
      );
    };

    if (WeaponDetail === null) {
      return null;
    }
    return (
      <div className="container ml-5">
        <img
          className="chrimg"
          alt="chrimg"
          src={WeaponDetail.images.icon}
        ></img>
        <div className="text-xl">Name: {WeaponDetail.name}</div>
        <div className="text-xl">
          <div className="flex flex-wrap">
            Rarity: {WeaponDetail.rarity}
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
          </div>
        </div>
        <div className="text-xl">Stat: {WeaponDetail.baseatk}</div>
        <div className="text-xl">Subtat: {WeaponDetail.substat}</div>
        {rarityDetail()}
        {/* <div className="mx-auto bg-white shadow">
          <div className="mb-6 border-b border-slate-200 pb-2 text-base font-semibold">Refine Status Detail</div>
          <input
            id="published"
            class="peer/refine_1 form-radio mr-2 mb-0.5 ml-4 border-slate-300 text-sky-400 focus:ring-sky-300"
            type="radio"
            name="status"
          />
          <label for="published" className="peer-checked/published:text-sky-500 font-medium">
            Refine 1
          </label>
          <input
            id="published"
            class="peer/refine_2 form-radio mr-2 mb-0.5 ml-4 border-slate-300 text-sky-400 focus:ring-sky-300"
            type="radio"
            name="status"
          />
          <label for="published" className="peer-checked/published:text-sky-500 font-medium">
          Refine 2
          </label>
          <input
            id="published"
            class="peer/refine_3 form-radio mr-2 mb-0.5 ml-4 border-slate-300 text-sky-400 focus:ring-sky-300"
            type="radio"
            name="status"
          />
          <label for="published" className="peer-checked/published:text-sky-500 font-medium">
          Refine 3
          </label>
          <input
            id="published"
            class="peer/refine_4 form-radio mr-2 mb-0.5 ml-4 border-slate-300 text-sky-400 focus:ring-sky-300"
            type="radio"
            name="status"
          />
          <label for="published" className="peer-checked/published:text-sky-500 font-medium">
          Refine 4
          </label>
          <input
            id="published"
            class="peer/refine_5 form-radio mr-2 mb-0.5 ml-4 border-slate-300 text-sky-400 focus:ring-sky-300"
            type="radio"
            name="status"
          />
          <label for="published" className="peer-checked/published:text-sky-500 font-medium">
          Refine 5
          </label>
          <div className="hidden peer-checked/refine_1:block text-xl">
          Effect on Refine 1:{" "}
          {WeaponDetail.effect
            .split("{0}")
            .join(WeaponDetail.r1[0])
            .split("{1}")
            .join(WeaponDetail.r1[1])
            .split("{2}")
            .join(WeaponDetail.r1[2])
            .split("{3}")
            .join(WeaponDetail.r1[3])}
      </div>
      <div className="hidden peer-checked/refine_2:block text-xl">
      Effect on Refine 2:{" "}
          {WeaponDetail.effect
            .split("{0}")
            .join(WeaponDetail.r2[0])
            .split("{1}")
            .join(WeaponDetail.r2[1])
            .split("{2}")
            .join(WeaponDetail.r2[2])
            .split("{3}")
            .join(WeaponDetail.r2[3])}
      </div>
      <div className="hidden peer-checked/refine_3:block text-xl">
      Effect on Refine 3:{" "}
          {WeaponDetail.effect
            .split("{0}")
            .join(WeaponDetail.r3[0])
            .split("{1}")
            .join(WeaponDetail.r3[1])
            .split("{2}")
            .join(WeaponDetail.r3[2])
            .split("{3}")
            .join(WeaponDetail.r3[3])}
      </div>
      <div className="hidden peer-checked/refine_4:block text-xl">
      Effect on Refine 4:{" "}
          {WeaponDetail.effect
            .split("{0}")
            .join(WeaponDetail.r4[0])
            .split("{1}")
            .join(WeaponDetail.r4[1])
            .split("{2}")
            .join(WeaponDetail.r4[2])
            .split("{3}")
            .join(WeaponDetail.r4[3])}
      </div>
      <div className="hidden peer-checked/refine_5:block text-xl">
      Effect on Refine 5:{" "}
          {WeaponDetail.effect
            .split("{0}")
            .join(WeaponDetail.r5[0])
            .split("{1}")
            .join(WeaponDetail.r5[1])
            .split("{2}")
            .join(WeaponDetail.r5[2])
            .split("{3}")
            .join(WeaponDetail.r5[3])}
        </div>
        </div> */}
        <div className="text-xl">Story: {WeaponDetail.story}</div>
        <div className="text-xl">Type: {WeaponDetail.weapontype}</div>
        <div className="text-xl">Release version: {WeaponDetail.version}</div>
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
                onClick={() => getAllWeapons()}
              >
                All
              </button>
              <button
                className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
                onClick={() => get5StarWeapons()}
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
                onClick={() => get4StarWeapons()}
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
                onClick={() => get3StarWeapons()}
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
                onClick={() => get2StarWeapons()}
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
                onClick={() => get1StarWeapons()}
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
            {weaponsList.map((value) => {
              return (
                // <div className="columns-1 text-center">
                <button
                  onClick={() => getWeaponDetail(value)}
                  className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
                >
                  {value}
                </button>
                // </div>
              );
            })}
          </div>
          <div className="md:w-3/4">{WrapWeaponDetail(WeaponDetail)}</div>
        </div>
      </div>
    </>
  );
}

export default WeaponsPage;
