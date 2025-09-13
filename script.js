const container = document.querySelector("#container");
const btn = document.querySelector("button");

let divs = 16;
let size = 830 / divs;

btn.addEventListener("click", () => {
    let divs = prompt("Enter the size of the matrix: ");
    if(divs > 100){
        alert("Enter a matrix smaller than 100 fields!");
    }else{
        const removeDivs = container.querySelectorAll("div");
        removeDivs.forEach((a) => {a.remove()});

        size = 830 / divs;
        for(let i = 0; i < divs**2; i++){
            const div = document.createElement("div");
            div.style.cssText = `border: 1px solid black; width: ${size}px; height: ${size}px;`
            container.appendChild(div);
        }

        container.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
        })
    }
})

function getRandomColor(){
    return Math.floor(Math.random() * 256);
}

for(let i = 0; i < divs**2; i++){
    const div = document.createElement("div");
    div.style.cssText = `border: 1px solid black; width: ${size}px; height: ${size}px;`
    container.appendChild(div);
}

container.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
})