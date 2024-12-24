"use client"



export default function Notification({notification, setNotification}) {
    return (
        <div className={`overlay`} style={{display: `${notification ? "flex" : "none"}`}}>
            <div className={`notification`}>
                <button className="btn-notification" onClick={()=>{setNotification(false)}}>X</button>
                <p>Se acabó el tiempo</p>
            </div>
        </div>
    );
}
  