import React, { useState } from "react";

function NumberButton({ key, number, name, buttFunction, type }) {
    return (
        <button onClick={buttFunction}>
            {
                type === "number" ? (
                    <img src={name} width={80} height={80} />
                ) : (
                    <p>{number}</p>
                )
            }            
        </button>
    )
}

export default NumberButton;