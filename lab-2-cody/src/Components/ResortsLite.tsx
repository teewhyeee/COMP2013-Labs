import type { ResortsLiteProps } from "../data/data";

export default function ResortsLite({
    image,
    location,
    resortName,
    rating,
    price,
}:ResortsLiteProps) {

    return <div className="ResortsLite">
        <img src={image} alt="" width="160px" />

        <div className="info" >
        <h2>{location}</h2>
        
        <p id="resortName" >{resortName}</p>

        <p style={rating > 4.0 ? {color: "green"} : {color: "red"}} >{rating}★</p>

        <p style={{color: "pink", fontWeight: "bolder"}} >${price}/night</p>
        </div>

    </div>
}