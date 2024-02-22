import React from "react";
import logo from "../../images/leopard_small.png";

const Home: React.FC = () => {
  return (
    <div>
      <img src={logo} height={150} />
      <br />
      <h1>Welcome to WEG Leopard CAD Center</h1>
    </div>
  );
};

export default Home;
