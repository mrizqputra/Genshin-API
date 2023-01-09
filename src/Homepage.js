import { React, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Sticker3 from "./img/sticker_3.png";
// import TalentSchedule from "./API/TalentSchedule";

function HomePage() {
  const [talentSchedule, setTalentSchedule] = useState([]);
  const [weaponMaterialSchedule, setWeaponMaterialSchedule] = useState([]);
  const [domainSchedule, setDomainSchedule] = useState([]);
  const [talent1Detail, setTalent1Detail] = useState(null);
  const [talent2Detail, setTalent2Detail] = useState(null);
  const [talent3Detail, setTalent3Detail] = useState(null);
  const [weaponMaterial1Detail, setWeaponMaterial1Detail] = useState(null);
  const [weaponMaterial2Detail, setWeaponMaterial2Detail] = useState(null);
  const [weaponMaterial3Detail, setWeaponMaterial3Detail] = useState(null);

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

  const getTodayFarmMaterial = () => {
    axios
      .all([
        axios({
          method: "GET",
          url: `https://genshin-db-api.vercel.app/api/weaponmaterialtypes`,
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
        }),
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
        }),
        axios({
          method: "GET",
          url: `https://genshin-db-api.vercel.app/api/domains`,
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
        }),
      ])
      .then(
        axios.spread((response1, response2, response3) => {
          setWeaponMaterialSchedule(response1.data);
          setTalentSchedule(response2.data);
          setDomainSchedule(response3.data);
          axios.all([
            axios({
              method: "GET",
              url: `https://genshin-db-api.vercel.app/api/materials`,
              params: {
                query: response2.data[0],
                // dumpResult: false, // The query result will return an object with the properties: { query, folder, match, matchtype, options, filename, result }.
                // matchNames: false, // Allows the matching of names.
                matchAltNames: true, // Allows the matching of alternate or custom names.
                matchAliases: true, // Allows the matching of aliases. These are searchable fields that returns the datLink to="#"object the query matched in.
                // matchCategories: true, // Allows the matching of categories. If true, then returns an array if it matches.
                // verboseCategories: false, // Used if Link to="#"category is matched. If true, then replaces each string name in the array with the datLink to="#"object instead.
                // queryLanguages: ["English"], // Array of languages that your query will be searched in.
                resultLanguage: "English", // Output language that you want your results to be in.
              },
              headers: {},
            })
              .then(function (response) {
                // console.log(response);
                setTalent1Detail(response.data);
              })
              .catch(function (err) {
                console.log(err);
              }),
            axios({
              method: "GET",
              url: `https://genshin-db-api.vercel.app/api/materials`,
              params: {
                query: response2.data[1],
                // dumpResult: false, // The query result will return an object with the properties: { query, folder, match, matchtype, options, filename, result }.
                // matchNames: false, // Allows the matching of names.
                matchAltNames: true, // Allows the matching of alternate or custom names.
                matchAliases: true, // Allows the matching of aliases. These are searchable fields that returns the datLink to="#"object the query matched in.
                // matchCategories: true, // Allows the matching of categories. If true, then returns an array if it matches.
                // verboseCategories: false, // Used if Link to="#"category is matched. If true, then replaces each string name in the array with the datLink to="#"object instead.
                // queryLanguages: ["English"], // Array of languages that your query will be searched in.
                resultLanguage: "English", // Output language that you want your results to be in.
              },
              headers: {},
            })
              .then(function (response) {
                // console.log(response);
                setTalent2Detail(response.data);
              })
              .catch(function (err) {
                console.log(err);
              }),
            axios({
              method: "GET",
              url: `https://genshin-db-api.vercel.app/api/materials`,
              params: {
                query: response2.data[2],
                // dumpResult: false, // The query result will return an object with the properties: { query, folder, match, matchtype, options, filename, result }.
                // matchNames: false, // Allows the matching of names.
                matchAltNames: true, // Allows the matching of alternate or custom names.
                matchAliases: true, // Allows the matching of aliases. These are searchable fields that returns the datLink to="#"object the query matched in.
                // matchCategories: true, // Allows the matching of categories. If true, then returns an array if it matches.
                // verboseCategories: false, // Used if Link to="#"category is matched. If true, then replaces each string name in the array with the datLink to="#"object instead.
                // queryLanguages: ["English"], // Array of languages that your query will be searched in.
                resultLanguage: "English", // Output language that you want your results to be in.
              },
              headers: {},
            })
              .then(function (response) {
                // console.log(response);
                setTalent3Detail(response.data);
              })
              .catch(function (err) {
                console.log(err);
              }),
          ]);
          axios.all([
            axios({
              method: "GET",
              url: `https://genshin-db-api.vercel.app/api/materials`,
              params: {
                query: response1.data[0],
                // dumpResult: false, // The query result will return an object with the properties: { query, folder, match, matchtype, options, filename, result }.
                // matchNames: false, // Allows the matching of names.
                matchAltNames: true, // Allows the matching of alternate or custom names.
                matchAliases: true, // Allows the matching of aliases. These are searchable fields that returns the datLink to="#"object the query matched in.
                // matchCategories: true, // Allows the matching of categories. If true, then returns an array if it matches.
                // verboseCategories: false, // Used if Link to="#"category is matched. If true, then replaces each string name in the array with the datLink to="#"object instead.
                // queryLanguages: ["English"], // Array of languages that your query will be searched in.
                resultLanguage: "English", // Output language that you want your results to be in.
              },
              headers: {},
            })
              .then(function (response) {
                // console.log(response);
                setWeaponMaterial1Detail(response.data);
              })
              .catch(function (err) {
                console.log(err);
              }),
            axios({
              method: "GET",
              url: `https://genshin-db-api.vercel.app/api/materials`,
              params: {
                query: response1.data[1],
                // dumpResult: false, // The query result will return an object with the properties: { query, folder, match, matchtype, options, filename, result }.
                // matchNames: false, // Allows the matching of names.
                matchAltNames: true, // Allows the matching of alternate or custom names.
                matchAliases: true, // Allows the matching of aliases. These are searchable fields that returns the datLink to="#"object the query matched in.
                // matchCategories: true, // Allows the matching of categories. If true, then returns an array if it matches.
                // verboseCategories: false, // Used if Link to="#"category is matched. If true, then replaces each string name in the array with the datLink to="#"object instead.
                // queryLanguages: ["English"], // Array of languages that your query will be searched in.
                resultLanguage: "English", // Output language that you want your results to be in.
              },
              headers: {},
            })
              .then(function (response) {
                // console.log(response);
                setWeaponMaterial2Detail(response.data);
              })
              .catch(function (err) {
                console.log(err);
              }),
            axios({
              method: "GET",
              url: `https://genshin-db-api.vercel.app/api/materials`,
              params: {
                query: response1.data[2],
                // dumpResult: false, // The query result will return an object with the properties: { query, folder, match, matchtype, options, filename, result }.
                // matchNames: false, // Allows the matching of names.
                matchAltNames: true, // Allows the matching of alternate or custom names.
                matchAliases: true, // Allows the matching of aliases. These are searchable fields that returns the datLink to="#"object the query matched in.
                // matchCategories: true, // Allows the matching of categories. If true, then returns an array if it matches.
                // verboseCategories: false, // Used if Link to="#"category is matched. If true, then replaces each string name in the array with the datLink to="#"object instead.
                // queryLanguages: ["English"], // Array of languages that your query will be searched in.
                resultLanguage: "English", // Output language that you want your results to be in.
              },
              headers: {},
            })
              .then(function (response) {
                // console.log(response);
                setWeaponMaterial3Detail(response.data);
              })
              .catch(function (err) {
                console.log(err);
              }),
          ]);
        })
      )
      .catch(function (err) {
        console.log(err);
      });
  };

  // const getMaterialDetail =  () => {
  //   // for (let i = 0; i < talentSchedule.length; i++)
  //     axios({
  //     method: "GET",
  //     url: `https://genshin-db-api.vercel.app/api/materials`,
  //     params: {
  //       query: talentSchedule[0],
  //       // dumpResult: false, // The query result will return an object with the properties: { query, folder, match, matchtype, options, filename, result }.
  //       // matchNames: false, // Allows the matching of names.
  //       matchAltNames: true, // Allows the matching of alternate or custom names.
  //       matchAliases: true, // Allows the matching of aliases. These are searchable fields that returns the datLink to="#"object the query matched in.
  //       // matchCategories: true, // Allows the matching of categories. If true, then returns an array if it matches.
  //       // verboseCategories: false, // Used if Link to="#"category is matched. If true, then replaces each string name in the array with the datLink to="#"object instead.
  //       // queryLanguages: ["English"], // Array of languages that your query will be searched in.
  //       resultLanguage: "English", // Output language that you want your results to be in.
  //     },
  //     headers: {},
  //   })
  //     .then(function (response) {
  //       // console.log(response);
  //       setMaterialDetail(response.data);
  //     })
  //     .catch(function (err) {
  //       console.log(err);
  //     });
  // };

  useEffect(() => {
    getTodayFarmMaterial();
  }, []);

  console.log(talentSchedule);
  console.log(weaponMaterialSchedule);
  console.log(domainSchedule);
  console.log(talent1Detail);
  console.log(talent2Detail);
  console.log(talent3Detail);
  console.log(weaponMaterial1Detail);
  console.log(weaponMaterial2Detail);
  console.log(weaponMaterial3Detail);

  const wrapImageTalent1 = (talent1Detail) => {
    if (talent1Detail !== null) {
      return (
        <>
          <img
            className="w-20 h-20"
            alt="hero"
            src={talent1Detail.images.fandom}
          />
        </>
      );
    }
    return null;
  };

  const wrapImageTalent2 = (talent2Detail) => {
    if (talent2Detail !== null) {
      return (
        <>
          <img
            className="w-20 h-20"
            alt="hero"
            src={talent2Detail.images.fandom}
          />
        </>
      );
    }
    return null;
  };

  const wrapImageTalent3 = (talent3Detail) => {
    if (talent3Detail !== null) {
      return (
        <>
          <img
            className="w-20 h-20"
            alt="hero"
            src={talent3Detail.images.fandom}
          />
        </>
      );
    }
    return null;
  };

  const wrapImageWM1 = (weaponMaterial1Detail) => {
    if (weaponMaterial1Detail !== null) {
      return (
        <>
          <img
            className="w-20 h-20"
            alt="hero"
            src={weaponMaterial1Detail.images.fandom}
          />
        </>
      );
    }
    return null;
  };

  const wrapImageWM2 = (weaponMaterial2Detail) => {
    if (weaponMaterial2Detail !== null) {
      return (
        <>
          <img
            className="w-20 h-20"
            alt="hero"
            src={weaponMaterial2Detail.images.fandom}
          />
        </>
      );
    }
    return null;
  };

  const wrapImageWM3 = (weaponMaterial3Detail) => {
    if (weaponMaterial3Detail !== null) {
      return (
        <>
          <img
            className="w-20 h-20"
            alt="hero"
            src={weaponMaterial3Detail.images.fandom}
          />
        </>
      );
    }
    return null;
  };

  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-20 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Before they sold out
            </h1>
            <p class="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
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
              src={Sticker3}
            />
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              Genshin Impact Guide
            </h2>
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Welcome to genshinguide.com
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.
            </p>
          </div>
          <div class="flex flex-wrap">
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Talent Material Today
              </h2>
              <p class="leading-relaxed text-base mb-4">
                <div className="inline-flex">
                  {wrapImageTalent1(talent1Detail)}
                  {wrapImageTalent2(talent2Detail)}
                  {wrapImageTalent3(talent3Detail)}
                </div>
                <br />
                {talentSchedule.join(", ")}
              </p>
              <Link to="#" class="text-indigo-500 inline-flex items-center">
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
              </Link>
            </div>
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Weapon Material Today
              </h2>
              <p class="leading-relaxed text-base mb-4">
                {domainSchedule[16]}
                <br />
                {domainSchedule[20]}
                <br />
                {domainSchedule[24]}
                <br />
                {domainSchedule[28]}
              </p>
              <Link to="#" class="text-indigo-500 inline-flex items-center">
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
              </Link>
            </div>
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Weapon Material Today
              </h2>
              <p class="leading-relaxed text-base mb-4">
              <div className="inline-flex">
                {wrapImageWM1(weaponMaterial1Detail)}
                {wrapImageWM2(weaponMaterial2Detail)}
                {wrapImageWM3(weaponMaterial3Detail)}
                </div>
                <br />
                {weaponMaterialSchedule.join(", ")}
              </p>
              <Link to="#" class="text-indigo-500 inline-flex items-center">
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
              </Link>
            </div>
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Talent Material Domain Today
              </h2>
              <p class="leading-relaxed text-base mb-4">
                {domainSchedule[0]}
                <br />
                {domainSchedule[4]}
                <br />
                {domainSchedule[8]}
                <br />
                {domainSchedule[12]}
              </p>
              <Link to="#" class="text-indigo-500 inline-flex items-center">
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
              </Link>
            </div>
          </div>
          {/* <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Button
        </button> */}
        </div>
      </section>
    </>
  );
}

export default HomePage;
