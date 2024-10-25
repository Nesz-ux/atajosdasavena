import React, { useState } from "react";
import Card from "./components/Card";
import "./App.css";
import apps from "./components/appsData";
import LogoDasavena from "./components/images/LogoDasavena.png";
import notFound from "./components/images/notFound.png"
import notFoundBlack from "./components/images/notFoundBlack.png"
import moon from "./components/images/luna.gif"
import sun from "./components/images/sol.gif"



const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleChangeTheme = () => {
    setDarkMode(!darkMode);
  };

  const filteredApps = apps.filter((app) => {
    const title = app.title
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    const description = app.description
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    const normalizedSearchTerm = searchTerm
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

    return (
      title.includes(normalizedSearchTerm) ||
      description.includes(normalizedSearchTerm)
    );
  });

  return (
    <div className={`container ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="title-container">
        <img src={LogoDasavena} />
        <h1 className="title">Recursos Dasavena</h1>
      </div>

      <div className="input-container">
        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-bar"
        />

        <button onClick={handleChangeTheme} className="btn-change-mode">
          {darkMode ? (
            <img src={sun} width={35} height={35}/>
          ) : (
            <img src={moon} width={30} height={30}/>
          )}
        </button>
      </div>

      {filteredApps.length > 0 ? (
        <div className="grid">
          {filteredApps.map((app, index) => (
            <Card
              key={index}
              image={app.image}
              title={app.title}
              description={app.description}
              url={app.url}
            />
          ))}
        </div>
      ) : (
        <div className="no-results">
          {!darkMode ? (
            <img src={notFoundBlack}  width={400} height={400}/>
          ) : (
            <img src={notFound}  width={400} height={400}/>
          )} 
          
        </div>
      )}
    </div>
  );
};

export default App;
