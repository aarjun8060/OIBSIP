
const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;
    
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
    console.log(valueTemp);

    const tempConvert = document.getElementById('temp_con');
    const valueConvert = temp_con.options[tempConvert.selectedIndex].value;
    console.log(valueConvert);

    if(valueTemp === "calc" && valueConvert === "fah"){

        let result = (numberTemp * 1.8) + 32;
        console.log(result);
        document.getElementById('result_container').innerHTML = `= ${result} fahrenheit`;
    }

    if(valueTemp === "calc" && valueConvert === "kel"){

        let result = (numberTemp+ 273.15);
        console.log(result);
        document.getElementById('result_container').innerHTML = `= ${result} kelvin`;
    }

    if(valueTemp === "fah" && valueConvert === "calc"){

        let result = (numberTemp - 32) / 1.8
        console.log(result);
        document.getElementById('result_container').innerHTML = `= ${result} celsius`;
    }

    if(valueTemp === "fah" && valueConvert === "kel"){

        let result = (numberTemp - 32) / 1.8 + 273.15;
        console.log(result);
        document.getElementById('result_container').innerHTML = `= ${result} kelvin`;
    }

    if(valueTemp === "kel" && valueConvert === "calc"){

        let result = numberTemp-273.15
        console.log(result);
        document.getElementById('result_container').innerHTML = `= ${result} celsius`;
    }
    if(valueTemp === "kel" && valueConvert === "fah"){

        let result = ((numberTemp-273.15)*1.8)+32
        console.log(result);
        document.getElementById('result_container').innerHTML = `= ${result} fahrenheit`;
    }

    if(valueTemp === "kel" && valueConvert === "kel"){
        alert("Please Enter Correct values");
    }
    if(valueTemp === "fah" && valueConvert === "fah"){
        alert("Please Enter Correct values");
    }
    if(valueTemp === "calc" && valueConvert === "calc"){
        alert("Please Enter Correct values");
    }



}