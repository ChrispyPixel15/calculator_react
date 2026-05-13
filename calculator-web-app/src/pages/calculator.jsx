import React, { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import "../styles/mainStyles.css"
import NumberButton from "../components/numberButton";
import zero from "../assets/cats/0-cat.png";
import one from "../assets/cats/1-cat.png";
import two from "../assets/cats/2-cat.png";
import three from "../assets/cats/3-cat.png";
import four from "../assets/cats/4-cat.png";
import five from "../assets/cats/5-cat.png";
import six from "../assets/cats/6-cat.png";
import seven from "../assets/cats/7-cat.png";
import eight from "../assets/cats/8-cat.png";
import nine from "../assets/cats/9-cat.png";

function Calculator() {
    const { changeTheme, currentTheme } = useContext(ThemeContext);
    const [calculationView, setCalculationView] = useState('');
    const hasRun = useRef(false);

    const numbers = [
        {
            number: 0,
            name: zero
        },
        {
            number: 1,
            name: one,
        },
        {
            number: 2,
            name: two,
        },
        {
            number: 3,
            name: three,
        },
        {
            number: 4,
            name: four,
        },
        {
            number: 5,
            name: five,
        },
        {
            number: 6,
            name: six,
        },
        {
            number: 7,
            name: seven,
        },
        {
            number: 8,
            name: eight,
        },
        {
            number: 9,
            name: nine,
        },
    ]

    function addNums() {
        const newNums = Array.from({ length: 9 }, (_, i) => i + 1 );
        setNumbers(prevNums => [...prevNums, ...newNums]);
    }

    function addNumsToView(number) {
        setCalculationView(calculationView + number.toString());
        console.log(number);
    }

    function calculateTheThings() {
        setCalculationView(eval(calculationView).toString());
    }

    function clearView() {
        setCalculationView('');
    }

    function backSpace() {
        const currentString = calculationView;
        setCalculationView(currentString.slice(0, -1));
    }

    return (
        <>
            <h1>Calculator</h1>            
            <section className="numberSection">
                {
                    calculationView.split('').map((calc) => {
                        if (calc !== '*' && calc !== '/' && calc !== '+' && calc !== '-' && calc !== "." && calc !== ",") {
                            const catNum = numbers.filter((num) => num.number.toString() === calc);
                            return <img src={catNum[0].name} width={150} height={150} />
                        }
                        else {
                            return <p>{calc}</p>   
                        }                        
                    })
                }
            </section>
            <section className="keyboard">
                {
                    numbers.map((num, key) => (
                        num.number !== 0 ?
                            <NumberButton key={key} number={num.number} name={num.name} buttFunction={() => addNumsToView(num.number)} type={"number"} />  
                        : <></>                      
                    ))
                }
                <NumberButton number={'.'} buttFunction={() => addNumsToView('.')}/>
                <NumberButton number={'0'} name={zero} buttFunction={() => addNumsToView("0")} type={"number"}/>
                <NumberButton number={'='} buttFunction={calculateTheThings}/>
                <NumberButton number={'+'} buttFunction={() => addNumsToView('+')}/>
                <NumberButton number={'-'} buttFunction={() => addNumsToView('-')}/>
                <NumberButton number={'/'} buttFunction={() => addNumsToView('/')}/>
                <NumberButton number={'*'} buttFunction={() => addNumsToView('*')}/>                
                <NumberButton number={'C'} buttFunction={clearView}/>
                <NumberButton number={'CE'} buttFunction={backSpace}/>
                
            </section>
            <button className="theme" onClick={changeTheme}>Theme: {currentTheme}</button>
        </>
    )
}

export default Calculator;