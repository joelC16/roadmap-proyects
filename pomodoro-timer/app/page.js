"use client";

import BtnLapses from "./components/btnLapses";
import BtnOptions from "./components/btnOptions";
import Historial from "./components/historial";
import CustomTimePopup from "./components/customPopup";
import Notification from "./components/notification";
import { useState, useEffect } from "react";

export default function Home() {
  // Muestra o oculta el popup custom
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  // botones del lapso (work, long-break y short-break)
  const [selectedButtonLapses, setSelectedButtonLapses] = useState("work");
  // Botones para controlar el tiempo (start, stop, resume, config)
  const [selectedButtonOptions, setSelectedButtonOptions] = useState("start");
  // empieza o para el conteo
  const [start, setStart] = useState(false);
  // muestra o no una notificación
  const [notification, setNotification] = useState(false)
  // Son los minutos y segundos que elige el usuario
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);


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
    } else if (selectedButtonLapses === "custom") {
      setMinutesAndSeconds({minutes: minutes, seconds: seconds})
    }
  }, [selectedButtonLapses]);

  // cambía el color de los botones
  function changeColor(button) {
    setSelectedButtonLapses(button);
  }

  return (
    <div className="container">
      <h1>Pomodoro timer</h1>
      <BtnLapses
        selectedButtonLapses={selectedButtonLapses}
        setSelectedButtonLapses={setSelectedButtonLapses}
        changeColor={changeColor}
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
        changeColor={changeColor}
        setMinutesAndSeconds={setMinutesAndSeconds}
        selectedButtonLapses={selectedButtonLapses}
        minutesAndSeconds={minutesAndSeconds}
        setIsPopupVisible={setIsPopupVisible}
        start={start}
        setStart={setStart}
        setNotification={setNotification}
        minutes={minutes}
        seconds={seconds}
      ></BtnOptions>
      <h2>Completed sections</h2>
      <Historial></Historial>
      <CustomTimePopup
        isVisible={isPopupVisible}
        onClose={() => setIsPopupVisible(false)}
        setMinutesAndSeconds={setMinutesAndSeconds}
        minutes={minutes}
        seconds={seconds}
        setMinutes={setMinutes}
        setSeconds={setSeconds}
      />
      <Notification
        notification={notification}
        setNotification={setNotification}
      ></Notification>
    </div>
  );
}
