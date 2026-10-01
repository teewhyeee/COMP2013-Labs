import ResortsLite from "./ResortsLite";
import type { ResortsLiteProps } from "../data/data";

interface ResortsContainerProps {
    data: ResortsLiteProps[];
}

export default function ResortsContainer({data}:ResortsContainerProps){
    return (
        <div className="ResortsContainer">
            {data.map((list) => (
            <ResortsLite key={list.id} {...list} />
            ))}
        </div>
    )
}