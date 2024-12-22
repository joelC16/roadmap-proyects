"use client";

export default function BtnLapses({selectedButtonLapses, setSelectedButtonLapses}) {

    function changeColor(button) {
        setSelectedButtonLapses(button);
    }

    return (
        <div className="container-btn-lapses">
            <button
                className={`btn-work ${selectedButtonLapses === 'work' ? "selected" : ""}`}
                onClick={() => changeColor('work')}
            >
                Work
            </button>
            <button
                className={`btn-short-break ${selectedButtonLapses === 'short-break' ? "selected" : ""}`}
                onClick={() => changeColor('short-break')}
            >
                Short break
            </button>
            <button
                className={`btn-large-break ${selectedButtonLapses === 'long-break' ? "selected" : ""}`}
                onClick={() => changeColor('long-break')}
            >
                Long break
            </button>
        </div>
    );
}
