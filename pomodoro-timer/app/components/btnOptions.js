export default function BtnOptions({selectedButtonOptions, setSelectedButtonOptions}) {
  function changeColorOptions(button) {setSelectedButtonOptions(button)}

  return (
    <div className="container-btn-options">
      <button className={`start ${selectedButtonOptions === "start" ? "selected-option" : ""}`} onClick={()=>changeColorOptions("start")}>
        Start
      </button>
      <button className={`stop ${selectedButtonOptions === "stop" ? "selected-option" : ""}`} onClick={()=>changeColorOptions("stop")}>
        Stop
      </button>
      <button className={`resume ${selectedButtonOptions === "resume" ? "selected-option" : ""}`} onClick={()=>changeColorOptions("resume")}>
        Resume
      </button>
      <button className={`custom ${selectedButtonOptions === "custom" ? "selected-option" : ""}`} onClick={()=>changeColorOptions("custom")}>
        Custom
      </button>
    </div>
  );
}
