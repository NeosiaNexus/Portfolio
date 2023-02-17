const changePrimaryColor = (value) => {
    
    const r = parseInt(value.substr(1,2), 16)
    const g = parseInt(value.substr(3,2), 16)
    const b = parseInt(value.substr(5,2), 16)

    document.head.querySelector("style").innerHTML = 
    '*{--primary: rgb(' + r + ',' + g + ',' + b + '); --primary-hsl: rgba(' + r + ',' + g + ',' + b + ',0.900);}';
}