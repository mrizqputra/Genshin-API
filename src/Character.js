import axios from "axios";
import React, { useEffect, useState} from "react";
import {CharacterContext} from "./Home"
// import { Link } from "react-router-dom";

function Character(){
    // const CharName = window.location.pathname().split("/");
    console.log(CharacterContext);

  

    
      useEffect(() => {
        getCharacter();
      }, []);
    
      const [characterList, setCharacterList] = useState([]);
    
      return (
        <div className="container">
          {characterList.map((item) => {
            console.log(item);
            return (
            <>
            <button className="rounded-lg px-3 py-2 text-slate-50 font-medium hover:bg-slate-100 hover:text-slate-900">
              {/* <Link to={`/characters/${item}`}> */}
              {item}
              {/* </Link> */}
              </button>
            </>
            )
          })}
        </div>
      );
}

export default Character;