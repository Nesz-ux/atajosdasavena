import React, { useState } from 'react';
import Card from './components/Card';
import './App.css';
import apps from './components/appsData'; 

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredApps = apps.filter(app => {
    const title = app.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    const description = app.description.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    const normalizedSearchTerm = searchTerm.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    return title.includes(normalizedSearchTerm) || description.includes(normalizedSearchTerm);
  });

  return (
    <div className="container">
      <h1 className="title">Selecciona una Página</h1>

      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-bar"
      />

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
    </div>
  );
};

export default App;
