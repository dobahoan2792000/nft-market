import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

NavBar.propTypes = {};

function NavBar(props) {
  return (
    <div className="pl-12 py-6 border-b-2">
      <p className="text-3xl font-bold">NFT Avatar</p>
      <div className="space-x-4 mt-4">
        <Link className="font-bold text-pink-400" to="/">Home</Link>
        <Link className="font-bold text-pink-400" to="/create-avatar">Create market</Link>
        <Link className="font-bold text-pink-400" to="/info-account">Info account</Link>
      </div>
    </div>
  );
}

export default NavBar;
