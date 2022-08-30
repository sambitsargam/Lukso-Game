import React from "react";

import '../index.css'

export function NoTokensMessage() {
  return (
    <div className="alert alert-danger" role="alert">
      <h3>You dont have any LYXt in your wallet, to get some use the  facuet button </h3>
      <br></br>
      <a className="btn btn-primary" href="https://faucet.l16.lukso.network/" target="_blank" rel="noopener noreferrer">faucet</a>
    </div>
  );
}
