const container = document.querySelector("#container"); 



container.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "red"; 
})

const button = document.querySelector("button"); 

button.addEventListener("click", () => {
    
    let userInput = prompt("number of square per side?","64");
    
    if ( userInput === null )  {
        alert("you canceled")
        return;
    }
    
    if ( userInput.trim() === "" ) {
        alert("input cannot be empty");
        return;
    }
    
    const numInput = +userInput;
    
    if (Number.isNaN(numInput)) {
        alert("Please enter a valid number")
        return; 
    }

    if(!Number.isInteger(numInput)) {
        alert("please enter a whole number"); 
        return; 
    }

    if(numInput < 1 || numInput > 100) {
        alert("Enter a number between 1 and 100");
        return;
    }

        container.replaceChildren(); 
        
        for (let i = 1; i <= (userInput*userInput); i++) {
            const div = document.createElement("div"); 
            div.style.backgroundColor = "green";
            div.style.height = `${960/userInput}px`
            div.style.width = `${960/userInput}px`
            
            container.appendChild(div); 
        } 
    
})
