import React from "react";
import logo from "../../images/leopard_small.png";
import { Button } from "@mui/material";

const Home: React.FC = () => {
  const handleDownloadClick = () => {
    // Caminho relativo para o setup.exe
    const installerPath = "../../../../leopard-installer/setup.exe";
    // Cria um elemento <a> temporário para iniciar o download
    const link = document.createElement("a");
    link.href = installerPath;
    link.setAttribute("download", "setup.exe");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <img src={logo} height={150} />
      <br />
      <h1>Welcome to WEG Leopard CAD Center</h1>
      <Button variant="outlined" color="success" onClick={handleDownloadClick}>
        Download Installer
      </Button>
    </div>
  );
};

export default Home;
