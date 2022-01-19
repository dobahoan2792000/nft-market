import React, { useState } from "react";
import PropTypes from "prop-types";
import sha256 from 'sha256'
CreateAvatar.propTypes = {};

function CreateAvatar(props) {
  const [nft, setNft] = useState({
    name: "",
    desc: "",
    image: "",
    sprites: "male"
  });
  const changeName = (e) => {
    setNft({ ...nft, name: e.target.value });
  };
  const changeDesc = (e) => {
    setNft({ ...nft, desc: e.target.value });
  };
  const changeSprites= (e) => {
    setNft({ ...nft, sprites: e.target.value });
  }
  const getAvatar = () => {
      if(!nft.name || !nft.desc) {
          alert("Enter name and description first")
      }else{
          const seed = sha256(nft.name + nft.desc)
        const avatar = `https://avatars.dicebear.com/api/${nft.sprites}/${seed}.svg`
        setNft({...nft, image : avatar})
      }
  };
  return (
    <div className="flex items-center justify-center h-screen my-12">
      <div className="w-1/3 flex flex-col">
          <p>Select seed</p>
        <select
          class="form-select appearance-none
      block
      w-full
      px-3
      py-2
      text-base
      font-normal
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label="Default select example"
          value={nft.sprites}
          onChange={changeSprites}
        >
          <option value="male">Male</option>    
          <option value="female">Female</option>
          <option value="human">Human</option>
          <option value="identicon">Identicon</option>
          <option value="initials">Initials</option>
          <option value="bottts">Bottts</option>
          <option value="avataaars">Avataaars</option>
          <option value="jdenticon">Jdenticon</option>
          <option value="gridy">Gridy</option>
          <option value="micah">Micah</option>
        </select>
        <p>Name</p>
        <input
          type="text"
          value={nft.name}
          onChange={changeName}
          className="border border-gray-300 p-2 mt-2 outline-none focus:border-black"
        />
        Description
        <input
          type="text"
          value={nft.desc}
          onChange={changeDesc}
          className="border border-gray-300 p-2 mt-2 outline-none focus:border-black"
        />
        Avatar
        <img
          src={
            nft.image != ""
              ? nft.image
              : "https://i.pinimg.com/564x/5d/14/de/5d14def44d07c83d2908e921df4e4d78.jpg"
          }
          className="w-full h-full object-cover mt-2 transition-all duration-500 aspect-square"
        />
        <div className="flex justify-center mt-2 space-x-2">
          <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white font-bold py-2 px-4 rounded" onClick={getAvatar}>
            Get Avatar
          </button>
          <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white font-bold py-2 px-4 rounded">
            Create Avatar
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateAvatar;
