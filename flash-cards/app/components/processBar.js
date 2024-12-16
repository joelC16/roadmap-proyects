import data from "../../public/data.json"

export default function ProcessBar ({number}) {
    const percent = ((number+1) / data.length)*100;

    return (
        <div className="container-bar">
            <div className="process" style={{ width: `${percent}%`}}></div>
        </div>
    )

}