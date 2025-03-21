const container = document.querySelector(".container");
let n = 16;
let grid = []
for(let i = 0; i<n; i++){
    var row = document.createElement("div");
    row.setAttribute("class", "row");
    row.setAttribute("style", "width:960px; display:flex;");

    for(let j = 0; j<n; j++){

        var block = document.createElement("div");
        block.setAttribute("class", "block_default");
        /*
        if(!j){
            grid[i] = [block];
            continue;
        }
        grid[i].push(block); */
        block.addEventListener("mouseover", (e) =>{
            e.target.classList.toggle("block_on");
        });
        block.addEventListener("mouseout", (e) =>{
            e.target.classList.toggle("block_on");
        });
        row.appendChild(block);
    }
    container.appendChild(row);
}
