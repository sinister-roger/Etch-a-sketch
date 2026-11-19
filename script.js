const container = document.querySelector("#container"); 


for (let i = 1; i <= 256; i++) {
    const div = document.createElement("div"); 
    div.style.backgroundColor = "green";
    div.style.height = "50px"; 
    div.style.width = "50px"; 

    container.appendChild(div); 
}
container.addEventListener("mousemove", () => {
    
    
})


