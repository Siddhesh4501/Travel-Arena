import React, { useState, useEffect } from "react";

import "./FilterPage.css";
import HomePage from "../HomePage/HomePage";
import Filter from "../Filter/Filter";
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";

const FilterRating = (props) => {
    const [rating, setRating] = useState('');

    return (
        <div className="filterpagediv">
            <div>
                <HomePage name={props.name}/>
            </div>
            <div className="ml-2">
                <h1>Rating</h1>
            </div>
            <div className="priceButton">
                <button className="btn btn-large btn-dark" onClick={(e) => setRating(e.target.value)} value="1">1 and Up</button>
                <button className="btn btn-large btn-dark" onClick={(e) => setRating(e.target.value)} value="2">2 and Up</button>
                <button className="btn btn-large btn-dark" onClick={(e) => setRating(e.target.value)} value="3">3 and Up</button>
                <button className="btn btn-large btn-dark" onClick={(e) => setRating(e.target.value)} value="4">4 and Up</button>
                <button className="btn btn-large btn-dark" onClick={(e) => setRating(e.target.value)} value="5">5</button>
                {rating != '' &&
                    <Filter category={"rating"} rating={rating} name={props.name}/>
                }
            </div>
        </div>
    )
}

export default FilterRating;