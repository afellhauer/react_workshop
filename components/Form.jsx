import { useState } from "react";

function Form(props) {

    const [ name, setName ] = useState("");
    const [ major, setMajor] = useState("");

    function handleName(e) {
        //alert(e.target.value);
        //e.target.value
        setName(e.target.value);
    }

    function handleMajor(e) {
        setMajor(e.target.value);

    }

    function handleCalculate() {
        props.handleCalculate(name, major);
    }

    return (
        <div>
            Name:
            <input 
                type="text" 
                value={name} 
                onChange={handleName}/>
            Major:
            <input 
                type="text" 
                value={major} 
                onChange={handleMajor} /> 
            <button onClick={handleCalculate}>
                Calculate
            </button>
        </div>
    )
}

export default Form;
//accessible by other files in our application