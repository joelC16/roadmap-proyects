"use client";
import { useEffect } from "react";

export default function BtnOptions({
  selectedButtonOptions,
  setSelectedButtonOptions,
  setMinutesAndSeconds,
  selectedButtonLapses,
  setIsPopupVisible,
  start, setStart,
  setNotification,
}) {


  // espera a que selectedButtonLapses cambie para actualizar los minutos y los segundos
  useEffect(() => {
    if (selectedButtonLapses === "work") {
      setMinutesAndSeconds({ minutes: 25, seconds: "00" });
    } else if (selectedButtonLapses === "short-break") {
      setMinutesAndSeconds({ minutes: 5, seconds: "00" });
    } else if (selectedButtonLapses === "long-break") {
      setMinutesAndSeconds({ minutes: 15, seconds: "00" });
    } 
  }, [selectedButtonLapses]);

  useEffect(() => {
    if (start) {
      const interval = setInterval(() => {
        setMinutesAndSeconds((prev) => {
          if (prev.seconds > 0) {
            return { ...prev, seconds: prev.seconds - 1 }; // Disminuye los segundos
          } else if (prev.minutes > 0) {
            return { minutes: prev.minutes - 1, seconds: 59 }; // Disminuye minutos y reinicia segundos
          } else {
            clearInterval(interval); // Detén el temporizador cuando llegue a 0:00
            setStart(!start);
            setNotification(true)
            console.log("tenes que hacer la parte del historial")
            return prev; // Retorna el estado actual para evitar errores
          }
        });
      }, 980);
      return () => clearInterval(interval); // Limpieza del intervalo
    }
  }, [start]);

  function changeColorOptions(button) {
    setSelectedButtonOptions(button);
  }

  return (
    <div className="container-btn-options">
      <button
        className={`start ${
          selectedButtonOptions === "start" ? "selected-option" : ""
        }`}
        onClick={() => {
          changeColorOptions("start");
          setStart(true);
        }}
      >
        Start
      </button>
      <button
        className={`stop ${
          selectedButtonOptions === "stop" ? "selected-option" : ""
        }`}
        onClick={() => {
          changeColorOptions("stop");
          setStart(false);
        }}
      >
        Stop
      </button>
      <button
        className={`resume ${
          selectedButtonOptions === "resume" ? "selected-option" : ""
        }`}
        onClick={() => {
          changeColorOptions("resume");
          if (selectedButtonLapses === "work") {
            setMinutesAndSeconds({ minutes: 25, seconds: "00" });
          } else if (selectedButtonLapses === "short-break") {
            setMinutesAndSeconds({ minutes: 5, seconds: "00" });
          } else if (selectedButtonLapses === "long-break") {
            setMinutesAndSeconds({ minutes: 15, seconds: "00" });
          }
          setStart(false); // Pausa el temporizador después de restablecer
        }}
      >
        Resume
      </button>
      <button
        className={`custom ${
          selectedButtonOptions === "custom" ? "selected-option" : ""
        }`}
        onClick={() => {
          changeColorOptions("custom");
          setIsPopupVisible(true)
        }}
      >
        Custom
      </button>
    </div>
  );
}
