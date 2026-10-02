import ResortsLite from "./ResortsLite";
import type { ResortsLiteProps } from "../data/data";

interface ResortsContainerProps {
    data: ResortsLiteProps[];
}

export default function ResortsContainer({data}:ResortsContainerProps){
    return (
        <div className="ResortsContainer">
            {data.map((listing) => (
            <ResortsLite key={listing.id} {...listing} />
            ))}
        </div>
    )
}