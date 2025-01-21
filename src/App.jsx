import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import Card from "./components/Card";
import "./App.css";
import apps from "./components/appsData";
import LogoDasavena from "./components/images/LogoDasavena.png";
import moon from "./components/images/luna.gif";
import sun from "./components/images/sol.gif";
import falseSearchWhite from "./components/images/falseSearchWhite.json";
import falseSearchBlack from "./components/images/falseSearchBlack.json";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [favorites, setFavorites] = useState([]);

  //Guardar y actualizar lo favoritos en el localStorage
  const toggleFavorite = (app) => {
    let updateFavorites;
    if (favorites.some((fav) => fav.title === app.title)) {
      updateFavorites = favorites.filter((fav) => fav.title !== app.title);
    } else {
      updateFavorites = [...favorites, app];
    }
    setFavorites(updateFavorites);
    localStorage.setItem("favorites", JSON.stringify(updateFavorites));
  };

  // Cargar favoritos desde localStorage al iniciar
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    const storedDarkMode = JSON.parse(localStorage.getItem("darkMode"));

    if (storedFavorites) {
      setFavorites(storedFavorites);
    }
    if (storedDarkMode !== null) {
      setDarkMode(storedDarkMode);
    }

  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleChangeTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  // Filtrar apps por búsqueda
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
      (title.includes(normalizedSearchTerm) ||
        description.includes(normalizedSearchTerm)) &&
        !favorites.some((fav) => fav.title === app.title)
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
            <img src={sun} width={35} height={35} />
          ) : (
            <img src={moon} width={30} height={30} />
          )}
        </button>
      </div>

      {favorites.length > 0 && (
        <div className="favorite-section">
          <h2>Favoritos</h2>
          <div className="grid">
            {favorites.map((app, index) => (
              <Card
                key={index}
                image={app.image}
                title={app.title}
                description={app.description}
                url={app.url}
                isfavorite={true}
                onToggleFavorite={() => toggleFavorite(app)}
              />
            ))}
          </div>
        </div>
      )}

      {filteredApps.length > 0 ? (
        <div className="grid">
          {filteredApps.map((app, index) => (
            <Card
              key={index}
              image={app.image}
              title={app.title}
              description={app.description}
              url={app.url}
              isfavorite={favorites.some((fav) => fav.title === app.title)}
              onToggleFavorite={() => toggleFavorite(app)}
            />
          ))}
        </div>
      ) : (
        <div className="no-results">
          {!darkMode ? (
            <Lottie
              animationData={falseSearchBlack}
              autoplay
              loop={false}
              style={{ height: "200px", width: "200px" }}
            />
          ) : (
            <Lottie
              animationData={falseSearchWhite}
              autoplay
              loop={false}
              style={{ height: "200px", width: "200px" }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default App;
