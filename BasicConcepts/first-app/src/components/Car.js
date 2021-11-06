import React, { useState, useEffect } from "react";

export default function Car() {
  const [carState, setCarState] = useState({
    started: false,
    countKm: 0,
  });

  const increaseKm = (number) => {
    console.log(increaseKm);
    if (carState.started) {
      setCarState({
        ...carState,
        countKm: carState.countKm + number,
      });
    } else {
      alert("El coche está apagado");
    }
  };

  useEffect(() => {
    document.title = `Coche ${carState.started ? "Encendido" : "Apagado"}`;
  }, [carState.started]);

  return (
    <div>
      <h2>
        Nuestro coche está:{" "}
        <span style={carState.started ? { color: "green" } : { color: "red" }}>
          {carState.started ? "Encendido" : "Apagado"}{" "}
        </span>
      </h2>
      <h2>Kilometros recorridos: {carState.countKm} km</h2>
      <button
        onClick={() =>
          setCarState({
            ...carState,
            started: !carState.started,
          })
        }
      >
        {!carState.started ? "Encender" : "Apagar"}
      </button>

      <button onClick={() => increaseKm(5)}>Incrementar Km</button>
    </div>
  );
}
