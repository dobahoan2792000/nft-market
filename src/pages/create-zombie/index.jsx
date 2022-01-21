import React, { useState } from "react";
import PropTypes from "prop-types";
import sha256 from "sha256";
import leftfeet from "../../zombieparts/left-feet-1@2x.png";
import rightfeet from "../../zombieparts/right-feet-1@2x.png";
import rightleg from "../../zombieparts/right-leg-1@2x.png";
import leftleg from "../../zombieparts/left-leg-1@2x.png";
import leftthigh from "../../zombieparts/left-thigh-1@2x.png";

import rightthigh from "../../zombieparts/right-thigh-1@2x.png";
import rightforearm from "../../zombieparts/right-forearm-1@2x.png";
import leftforearm from "../../zombieparts/left-forearm-1@2x.png";
import rightupperarm from "../../zombieparts/right-upper-arm-1@2x.png";
import leftupperarm from "../../zombieparts/left-upper-arm-1@2x.png";
import torso from "../../zombieparts/torso-1@2x.png";
import hand1 from "../../zombieparts/hand1-1@2x.png";
import hand2 from "../../zombieparts/hand-2-1@2x.png";
import mouth from "../../zombieparts/mouth-1@2x.png";
import catleg from "../../zombieparts/catlegs.png";

CreateZombie.propTypes = {};

function CreateZombie(props) {
  // const [nft, setNft] = useState({
  //   name: "",
  //   desc: "",
  //   image: "",
  //   sprites: "male",
  // });
  // const hideNameFieldClass = () => {
  //   return "zombie-card card bg-shaded";
  // };
  // const changeName = (e) => {
  //   setNft({ ...nft, name: e.target.value });
  // };
  // const changeDesc = (e) => {
  //   setNft({ ...nft, desc: e.target.value });
  // };
  // const changeSprites = (e) => {
  //   setNft({ ...nft, sprites: e.target.value });
  // };
  // const getAvatar = () => {
  //   if (!nft.name || !nft.desc) {
  //     alert("Enter name and description first");
  //   } else {
  //     const seed = sha256(nft.name + nft.desc);
  //     const avatar = `https://avatars.dicebear.com/api/${nft.sprites}/${seed}.svg`;
  //     setNft({ ...nft, image: avatar });
  //   }
  // };
  const [currentSkin, setCurrentSkin] = useState(0);
  const [currentEye, setCurrentEye] = useState(1);
  const [currentClothes, setCurrentClothes] = useState(2);
  const [catMode, setCatMode] = useState(true)
  const shirtClass = (i) => {
    return `shirt shirt-part-${i}`;
  };
  const shirtSrc = (i) => {
    return require("../../zombieparts/shirt-" + i + "@2x.png");
  };
  const eyeClass = (i) => {
    return `eye eye-part-${i}`;
  };
  const eyeSrc = (i) => {
    return require("../../zombieparts/eyes-" + i + "@2x.png");
  };
  const headClass = (i) => {
    return `head head-part-${i}`;
  };
  const headSrc = (i) => {
    return require("../../zombieparts/head-" + i + "@2x.png");
  };
  const getColor = (def) => {
    return { filter: `hue-rotate(${def}deg)` };
  };
  // const headColor = () => {
    
  //   return getColor(currentSkin);
  // };
  // console.log(getColor(currentSkin))
  // const eyeColor = () => {
  //   return getColor(currentEye);
  // };
  // const clothesColor = () => {
  //   return getColor(currentClothes);
  // };
  const shirt = () => {
    let shirts = [];
    for (var i = 1; i <= 6; i++) {
      shirts.push(<img style={getColor(currentClothes)} className={`${shirtClass(i)} ${i == currentClothes + 1 ? "block" : "hidden"}`} src={shirtSrc(i)} key={i}/>);
    }
    return shirts;
  };
  const head = () => {
    let heads = [];
    for (var i = 1; i <= 6; i++) {
      heads.push(<img style={getColor(currentSkin)} className={`${headClass(i)} ${i == currentSkin + 1 ? "block" : "hidden"}`} src={headSrc(i)}/>);
    }
    return heads;
  };
  const eye = () => {
    let eyes = [];
    for (var i = 1; i <= 6; i++) {
      eyes.push(<img style={getColor(currentEye)} className={`${eyeClass(i)} ${i == currentEye + 1 ? "block" : "hidden"}`} src={eyeSrc(i)} />);
    }
    return eyes;
  };


  return (
    <div className={`zombie-char zombie-parts`}>
      <img
        style={getColor(currentClothes)}
        className={`left-feet ${catMode ? "hidden" : ""}`}
        src={leftfeet}
      />
      <img
        style={getColor(currentClothes)}
        // v-show="!catMode"
        className={`right-feet ${catMode ? "hidden" : ""}`}
        src={rightfeet}
      />

      <img
        style={getColor(currentClothes)}
        // v-show="!catMode"
        className={`left-leg ${catMode ? "hidden" : ""}`}
        src={leftleg}
      />
      <img
        style={getColor(currentClothes)}
        // v-show="!catMode"
        className={`right-leg ${catMode ? "hidden" : ""}`}
        src={rightleg}
      />

      <img
        style={getColor(currentClothes)}
        // v-show="!catMode"
        className={`left-thigh ${catMode ? "hidden" : ""}`}
        src={leftthigh}
      />
      <img
       style={getColor(currentClothes)}
        // v-show="!catMode"
        className={`right-thigh ${catMode ? "hidden" : ""}`}
        src={rightthigh}
      />

      <img
        style={getColor(currentSkin)}
        className="left-forearm"
        src={leftforearm}
      />
      <img
        style={getColor(currentSkin)}
        className="right-forearm"
        src={rightforearm}
      />

      <img
         style={getColor(currentSkin)}
        className="right-upper-arm"
        src={rightupperarm}
      />

      <img
        style={getColor(currentClothes)}
        className="torso"
        src={torso}
      />

      <img
        style={getColor(currentClothes)}
        // v-show="catMode"
        className={`cat-legs ${catMode ? "block" : "hidden"}`}
        src={catleg}
      />
      {
      shirt()
    }
      <img
        style={getColor(currentSkin)}
        className="left-upper-arm"
        src={leftupperarm}
      />

      <img
        style={getColor(currentSkin)}
        className="left-forearm"
        src={leftforearm}
      />
      <img
        style={getColor(currentSkin)}
        className="right-forearm"
        src={rightforearm}
      />

      <img
        style={getColor(currentSkin)}
        className="left-hand"
        src={hand1}
      />
      <img
        style={getColor(currentSkin)}
        className="right-hand"
        src={hand2}
      />
      {
      head()
    }
      {
      eye()
    }
      {/* <img style="headColor" :className="headClass(n)" v-for="(n,i) in 7" :src="headSrc(n)" :key="i"> */}
      {/* <img style="eyeColor" :className="eyeClass(n)" v-for="(n,i) in 11" :src="eyeSrc(n)" :key="i"> */}
      <img className="mouth" src={mouth} />

      {/* <div className={hideNameFieldClass}>
    <div className="card-header bg-dark">
      <strong>Name zombie</strong>
    </div>
    <small>Description</small>
  </div> */}
    </div>
  );
}
// <div className="flex items-center justify-center h-screen my-12">
//   <div className="w-1/3 flex flex-col">
//       <p>Select seed</p>
//     <select
//       className="form-select appearance-none
//   blockz
//   w-full
//   px-3
//   py-2
//   text-base
//   font-normal
//   bg-white bg-clip-padding bg-no-repeat
//   border border-solid border-gray-300
//   transition
//   ease-in-out
//   m-0
//   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
//       aria-label="Default select example"
//       value={nft.sprites}
//       onChange={changeSprites}
//     >
//       <option value="male">Male</option>
//       <option value="female">Female</option>
//       <option value="human">Human</option>
//       <option value="identicon">Identicon</option>
//       <option value="initials">Initials</option>
//       <option value="bottts">Bottts</option>
//       <option value="avataaars">Avataaars</option>
//       <option value="jdenticon">Jdenticon</option>
//       <option value="gridy">Gridy</option>
//       <option value="micah">Micah</option>
//     </select>
//     <p>Name</p>
//     <input
//       type="text"
//       value={nft.name}
//       onChange={changeName}
//       className="border border-gray-300 p-2 mt-2 outline-none focus:border-black"
//     />
//     Description
//     <input
//       type="text"
//       value={nft.desc}
//       onChange={changeDesc}
//       className="border border-gray-300 p-2 mt-2 outline-none focus:border-black"
//     />
//     Avatar
//     <img
//       src={
//         nft.image != ""
//           ? nft.image
//           : "https://i.pinimg.com/564x/5d/14/de/5d14def44d07c83d2908e921df4e4d78.jpg"
//       }
//       className="w-full h-full object-cover mt-2 transition-all duration-500 aspect-square"
//     />
//     <div className="flex justify-center mt-2 space-x-2">
//       <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white font-bold py-2 px-4 rounded" onClick={getAvatar}>
//         Get Avatar
//       </button>
//       <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white font-bold py-2 px-4 rounded">
//         Create Avatar
//       </button>
//     </div>
//   </div>
// </div>
export default CreateZombie;
