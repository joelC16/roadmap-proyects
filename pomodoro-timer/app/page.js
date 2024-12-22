"use client";

import BtnLapses from "./components/btnLapses";
import BtnOptions from "./components/btnOptions";
import Historial from "./components/historial";
import { useState, useEffect } from "react";

export default function Home() {
  // botones del lapso (work, long-break y short-break)
  const [selectedButtonLapses, setSelectedButtonLapses] = useState("work");
  // Botones para controlar el tiempo (start, stop, resume, config)
  const [selectedButtonOptions, setSelectedButtonOptions] = useState("start");


  // Minutos y segundos 
  const [minutesAndSeconds, setMinutesAndSeconds] = useState({minutes: 25, seconds: "00"})

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

  return (
    <div className="container">
      <h1>Pomodoro timer</h1>
      <BtnLapses
        selectedButtonLapses={selectedButtonLapses}
        setSelectedButtonLapses={setSelectedButtonLapses}
      ></BtnLapses>
      <div className="container-time">
        <div className="time">
          <span className="minutes">{minutesAndSeconds.minutes}</span>:
          <span className="seconds">{minutesAndSeconds.seconds}</span>
        </div>
      </div>
      <BtnOptions
        selectedButtonOptions={selectedButtonOptions}
        setSelectedButtonOptions={setSelectedButtonOptions}
      ></BtnOptions>
      <h2>Completed sections</h2>
      <Historial></Historial>
    </div>
  );
}
