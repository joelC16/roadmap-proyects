"use client";
import { useState } from "react";

export default function CustomTimePopup({
  isVisible,
  onClose,
  setMinutesAndSeconds,
  minutes,
  setMinutes,
  seconds,
  setSeconds
}) {
  if (!isVisible) return null;



  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <h2 className="popup-title">Set Custom Time</h2>
        <form className="popup-form">
          <div className="input-group">
            <label htmlFor="minutes">Minutes:</label>
            <input
              type="number"
              id="minutes"
              name="minutes"
              min="0"
              value={minutes}
              onChange={(e) => setMinutes(Number(e.target.value))}
            />
          </div>
          <div className="input-group">
            <label htmlFor="seconds">Seconds:</label>
            <input
              type="number"
              id="seconds"
              name="seconds"
              min="0"
              max="59"
              value={seconds}
              onChange={(e) => setSeconds(Number(e.target.value))}
            />
          </div>
        </form>
        <button
          className="close-button"
          onClick={() => {
            onClose()
            setMinutesAndSeconds({ minutes: minutes, seconds: seconds });
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
