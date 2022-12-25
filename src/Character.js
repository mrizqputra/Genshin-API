// import { Link } from "react-router-dom";
import GetCharacterDetail from "./API/GetCharacterDetail";
import { getValue } from "@testing-library/user-event/dist/utils";


function Character(){
  const characterDetail = GetCharacterDetail(getValue)
  console.log(characterDetail);

      return (
        <div className="container mb-10">
                <div className="h1">
                {characterDetail.name}
                </div>
        </div>
      );
}

export default Character;