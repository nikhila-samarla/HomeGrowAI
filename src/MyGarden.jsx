import { useEffect, useState } from "react";
import "./MyGarden.css";

function MyGarden({ page = "mygarden" }) {
  const [plants, setPlants] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("homegrowai-plants")) || [];
    } catch {
      return [];
    }
  });

  const [plantName, setPlantName] = useState("");
  const [plantType, setPlantType] = useState("Vegetable");
  const [plantDate, setPlantDate] = useState("");

  useEffect(() => {
    localStorage.setItem("homegrowai-plants", JSON.stringify(plants));
  }, [plants]);

  const addPlant = (e) => {
    e.preventDefault();

    if (!plantName.trim() || !plantDate) {
      alert("Please enter plant name and planting date.");
      return;
    }

    const newPlant = {
      id: Date.now(),
      name: plantName,
      type: plantType,
      date: plantDate,
      stage: "Seedling",
      activities: 0,
    };

    setPlants((previous) => [...previous, newPlant]);
    setPlantName("");
    setPlantDate("");
  };

  const updateStage = (id, stage) => {
    setPlants((previous) =>
      previous.map((plant) =>
        plant.id === id ? { ...plant, stage } : plant
      )
    );
  };

  const recordActivity = (id) => {
    setPlants((previous) =>
      previous.map((plant) =>
        plant.id === id
          ? { ...plant, activities: plant.activities + 1 }
          : plant
      )
    );
  };

  
    if (page === "progress") {
  return (
    <div className="my-garden">
      <section className="garden-progress-section">
        <header className="garden-header">
          <h1>📊 My Garden Progress</h1>
          <p>Monitor your gardening journey and achievements.</p>
        </header>

        <section className="garden-summary">
          <div className="summary-card">
            <h2>{plants.length}</h2>
            <p>Total Plants</p>
          </div>

          <div className="summary-card">
            <h2>{plants.filter((p) => p.stage !== "Harvested").length}</h2>
            <p>Growing Plants</p>
          </div>

          <div className="summary-card">
            <h2>{plants.reduce((sum, p) => sum + p.activities, 0)}</h2>
            <p>Activities Completed</p>
          </div>

          <div className="summary-card">
            <h2>{plants.filter((p) => p.stage === "Harvested").length}</h2>
            <p>Harvested Plants</p>
          </div>
        </section>
      </section>
    </div>
  );
}

return (
    <div className="my-garden">

      <header className="garden-header" id="mygarden-section">
        <h1>🌱 My Garden</h1>
        <p>Add your plants and manage your home garden.</p>
      </header>

      <section className="add-plant-section">
        <h2>➕ Add Your Plant</h2>

        <form onSubmit={addPlant}>
          <input
            type="text"
            placeholder="Enter plant name"
            value={plantName}
            onChange={(e) => setPlantName(e.target.value)}
          />

          <select
            value={plantType}
            onChange={(e) => setPlantType(e.target.value)}
          >
            <option>Vegetable</option>
            <option>Fruit</option>
            <option>Flower</option>
            <option>Herb</option>
            <option>Other</option>
          </select>

          <input
            type="date"
            value={plantDate}
            onChange={(e) => setPlantDate(e.target.value)}
          />

          <button type="submit">Add Plant</button>
        </form>
      </section>

      <section className="plant-list-section">
        <h2>🌿 My Plants</h2>

        {plants.length === 0 ? (
          <p className="empty-message">
            No plants added yet. Add your first plant to start tracking!
          </p>
        ) : (
          <div className="plant-grid">
            {plants.map((plant) => (
              <div className="plant-card" key={plant.id}>
                <h3>🌱 {plant.name}</h3>
                <p>Category: {plant.type}</p>
                <p>Planted on: {plant.date}</p>
                <p>Activities completed: {plant.activities}</p>

                <label>Growth Stage</label>
                <select
                  value={plant.stage}
                  onChange={(e) =>
                    updateStage(plant.id, e.target.value)
                  }
                >
                  <option>Seedling</option>
                  <option>Growing</option>
                  <option>Flowering</option>
                  <option>Fruiting</option>
                  <option>Harvested</option>
                </select>

                <button onClick={() => recordActivity(plant.id)}>
                  + Record Activity
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="garden-progress-section" id="progress-section">
        <header className="garden-header">
          <h1>📊 My Garden Progress</h1>
          <p>Monitor your gardening journey and achievements.</p>
        </header>

        <section className="garden-summary">
          <div className="summary-card">
            <h2>{plants.length}</h2>
            <p>Total Plants</p>
          </div>

          <div className="summary-card">
            <h2>
              {plants.filter((p) => p.stage !== "Harvested").length}
            </h2>
            <p>Growing Plants</p>
          </div>

          <div className="summary-card">
            <h2>
              {plants.reduce((sum, p) => sum + p.activities, 0)}
            </h2>
            <p>Activities Completed</p>
          </div>

          <div className="summary-card">
            <h2>
              {plants.filter((p) => p.stage === "Harvested").length}
            </h2>
            <p>Harvested Plants</p>
          </div>
        </section>
      </section>
    </div>
  );
}

export default MyGarden;