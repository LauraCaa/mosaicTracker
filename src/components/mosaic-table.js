import "@/assets/styles.css";
import Data from "@/utils/mock-response.json";
export default function MosaicTable() {
    const dataTable = Object.keys(Data.mosaic).map((name)=>({
        name: name,
        score: Data.mosaic[name].score,
        change: Data.mosaic[name].change
    }))
    return(
        <table>
            <tbody>
                {dataTable.map((mosaic, index) => (
                <tr key={index}>
                    <td className="capitalize-style">{mosaic.name === "overall" ? Object.keys(Data) : mosaic.name}</td>
                    <td className="text-bold text-aling-right">{mosaic.score}</td>
                    <td className={`text-aling-right ${mosaic.change > 0 ? "green-text": "red-text"}`}>{mosaic.change === 0 ? null: mosaic.change}</td>
                    <td className="xs-text">{mosaic.name === "overall" ? "1-month": null}</td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}
// 29.30.70