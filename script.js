const container = document.querySelector(".container");
let n = 16;
var pushed = 0;
const btn = document.createElement("button");
btn.textContent = "choose grid size";

btn.addEventListener("click", (e) =>{
    if(pushed != 0){
        container.removeChild(document.getElementById('grid'));
    }
    const grid = document.createElement("div");
    grid.setAttribute("id","grid");
    n = prompt("choose grid size: ");
    for(let i = 0; i<n; i++){
        var row = document.createElement("div");
        row.setAttribute("class", "row");
        row.setAttribute("style", "width:960px; display:flex;");
    
        for(let j = 0; j<n; j++){
            var block = document.createElement("div");
            let w = 960 / n;
            block.setAttribute("class", "block_default");
            block.setAttribute("style", ` width:${w}px; height:${w}px;`);
            block.addEventListener("mouseover", (e) =>{
                if(e.target.style["background-color"] != "black"){
                    e.target.style["background-color"] = "black";
                    e.target.style.opacity = 0.1;
                    return;
                }
    
                if(e.target.style.opacity < 1)
                    e.target.style.opacity = +e.target.style.opacity + 0.1;
            });

            row.appendChild(block);
        }
        grid.appendChild(row);
    }
    container.appendChild(grid);
    pushed += 1;
})
container.appendChild(btn);



