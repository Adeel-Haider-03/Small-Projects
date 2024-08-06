let result=document.querySelector(".result");
let buttons=document.querySelectorAll(".button");
let output="";
let specialChars=["+","-","/","*","%","=","."];

buttons.forEach((button) => {
    button.addEventListener("click",(e)=>{
        calculate(e.target.innerText);
    })
});

function calculate(value){
    
    //If output has '%', replace with '/100' before evaluating.
    if (value === "=" && output !== "") {
        try {
            output=eval(output.replace("%", "/100"));
        } catch (error) {
            result.value = 'Error';
            output = "";
        }
    }
    else if (value=="AC"){
        output="";
    }
    //If DEL button is clicked, remove the last character from the output.
    else if(value=="DEL"){
        output=output.toString().slice(0,-1);
    }
     //If output is empty and button is specialChars then return
    else if (output === "" && specialChars.includes(value)) {
        return;
    }
    // Check if the last character in the output is an operator before adding another one.
    else if (specialChars.includes(value) && specialChars.includes(output.slice(-1))) {
        return;
    }
    else{
        output+=value;
    }
        result.value=output;

        
}

document.addEventListener("keydown", (e) => {
    const key = e.key;
    if ((key >= "0" && key <= "9") || specialChars.includes(key) || key === "=") {
        e.preventDefault();
        calculate(key);
    }
});
