import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sticker3 from "./img/sticker_3.png";
// import TalentSchedule from "./API/TalentSchedule";

function HomePage() {
  const [talentToday, setTalentToday] = useState(null);
  const [weaponMaterialToday, setWeaponMaterialToday] = useState(null);
  const [character, setCharacter] = useState(null);

  const genshindb = require("genshin-db");

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

  useEffect(() => {
    setTalentToday(
      genshindb.materials(getToday, {
        matchCategories: true,
        verboseCategories: true,
      }).filter((value) => value.materialtype === "Character Talent Material" && value.rarity === '4')
    );
    setWeaponMaterialToday(genshindb.materials(getToday, {
      matchCategories: true,
      verboseCategories: true,
    }).filter((value) => value.materialtype === "Weapon Ascension Material" && value.rarity === '4')
    );
    setCharacter(
      genshindb.characters("names", {
        matchCategories: true,
        verboseCategories: true,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(talentToday);
  console.log(weaponMaterialToday);
  console.log(character);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-20 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Before they sold out
              {/* {wrapTalentToday(materialSchedule)} */}
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={Sticker3}
            />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              Genshin Impact Guide
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Welcome to genshinguide.com
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Talent Material Today
              </h2>
              <p className="leading-relaxed text-base mb-4">
              {talentToday.map((value) => {
            return (
              <>
                <div className="text-sm">{value.name}</div>
                <img
                  src={`https://api.ambr.top/assets/UI/${value.images.nameicon}.png`}
                  alt="talent-img"
                  className="h-10 w-10"
                />
              </>
            );
        })}

              </p>
              <Link to="#" className="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Weapon Material Today
              </h2>
              <div classNameName="leading-relaxed text-base mb-4">
                {weaponMaterialToday.map((value) => {
                    return (
                      <>
                        <div className="text-sm">{value.name}</div>
                        <img
                          src={`https://api.ambr.top/assets/UI/${value.images.nameicon}.png`}
                          alt="talent-img"
                          className="h-10 w-10"
                          />
                      </>
                    );
                })}
              </div>
              <Link to="#" className="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Weapon Material Today
              </h2>
              <p className="leading-relaxed text-base mb-4"></p>
              <Link to="#" className="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Talent Material Domain Today
              </h2>
              <p className="leading-relaxed text-base mb-4">
                {/* {domainSchedule.join(", ")} */}
              </p>
              <Link to="#" className="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
          {/* <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Button
        </button> */}
        </div>
      </section>
    </>
  );
}

export default HomePage;
