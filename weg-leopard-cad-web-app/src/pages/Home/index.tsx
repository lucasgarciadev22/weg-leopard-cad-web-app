import React from "react";
import logo from "../../images/leopard_small.png";
import { Button, Icon } from "@mui/material";
import { DownloadOutlined } from "@mui/icons-material";

const Home: React.FC = () => {
  const handleDownloadClick = () => {
    // Caminho relativo para o setup.exe
    const installerPath =
      "https://github.com/lucasgarciadev22/weg-leopard-cad-web-app/releases/download/preview-1/Leopard.Installer.exe";
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
      <br />
      <h1>Welcome to WEG Leopard CAD Center</h1>
      <br />
      <Button variant="contained" color="success" onClick={handleDownloadClick}>
        <DownloadOutlined />
        Download Leopard
      </Button>
    </div>
  );
};

export default Home;
