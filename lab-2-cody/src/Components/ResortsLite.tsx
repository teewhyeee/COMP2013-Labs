import type { ResortsLiteProps } from "../data/data";

export default function ResortsLite({
    image,
    location,
    resortName,
    rating,
    price,
}:ResortsLiteProps) {

    return <div className="ResortsLite">
        <img src={image} alt="" width="200px" />

        <h2>{location}</h2>
        
        <p>{resortName}</p>

        <p>{rating}</p>

        <p>{price}</p>

        {/* <p style={{color: "red", fontWeight: "bolder"}}> 
            {props.sale && "ON SALE"}</p> */}
    </div>
}