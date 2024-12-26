import { useState, useEffect } from "react";

export default function BtnOptions({
  selectedButtonOptions,
  setSelectedButtonOptions,
  setMinutesAndSeconds,
  selectedButtonLapses,
  setIsPopupVisible,
  start, 
  setStart,
  setNotification,
}) {

  // Definir el sonido una vez cuando el componente se monta
  const [sonido] = useState(new Audio('ringtones-minion-wake-up.mp3')); // Cambia la ruta del archivo de sonido

  // Función para reproducir el sonido
  function reproducirSonido() {
    sonido.play();
  }

  // Función para detener el sonido
  function detenerSonido() {
    sonido.pause();
    sonido.currentTime = 0;
  }

  // Espera a que selectedButtonLapses cambie para actualizar los minutos y los segundos
  useEffect(() => {
    if (selectedButtonLapses === "work") {
      setMinutesAndSeconds({ minutes: 25, seconds: "00" });
    } else if (selectedButtonLapses === "short-break") {
      setMinutesAndSeconds({ minutes: 5, seconds: "00" });
    } else if (selectedButtonLapses === "long-break") {
      setMinutesAndSeconds({ minutes: 15, seconds: "00" });
    }
  }, [selectedButtonLapses]);

  // Lógica de temporizador
  useEffect(() => {
    if (start) {
      const interval = setInterval(() => {
        setMinutesAndSeconds((prev) => {
          if (prev.seconds > 0) {
            return { ...prev, seconds: prev.seconds - 1 };
          } else if (prev.minutes > 0) {
            return { minutes: prev.minutes - 1, seconds: 59 };
          } else {
            clearInterval(interval); // Detener el temporizador
            setStart(false); // Detener el temporizador
            setNotification(true); // Notificación cuando termine el tiempo
            reproducirSonido(); // Reproducir sonido
            return prev; // Evitar errores
          }
        });
      }, 1000); // Intervalo de 1 segundo
      return () => clearInterval(interval); // Limpiar el intervalo
    }
  }, [start, setMinutesAndSeconds, setNotification]);

  // Cambiar color de las opciones
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
          detenerSonido();
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
          setStart(false); // Pausar el temporizador
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
          setIsPopupVisible(true);
        }}
      >
        Custom
      </button>
    </div>
  );
}
