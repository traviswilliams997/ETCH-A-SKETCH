
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    let gridSize = 0;
    let keepGoing = true;

    //forces user to enter appropraite gridsize
    while(keepGoing){

         gridSize = prompt('Enter number of squares per side for grid (Max value:100)');

            if(gridSize <= 100){
                keepGoing = false;
            }
    }

const container = document.querySelector('#container');


//makes 16 rows and stores in container div
for(let i = 1; i <= gridSize; i++){
const rows = document.createElement('div');
rows.classList.add(`row${i}`, 'row');
container.appendChild(rows);
}


//makes columns stay inline for each row
const allRows = document.querySelectorAll('div.row').forEach(element => {
    element.style.display = 'flex';
    
});


//adds 16 columns to each row 
for(let a = 1; a <= gridSize; a++ ){
    const cols = document.querySelector(`div.row${a}`);

    for(let i = 1; i <= gridSize; i++){
        const col = document.createElement('div');
        col.classList.add('col',`row1col${i}`);
        cols.appendChild(col);
    }

}

// to hover when mouse over
const hover = document.querySelectorAll('.col');

for (let i = 0; i < hover.length; i++) {
    hover[i].addEventListener("mouseover", function() {
        hover[i].setAttribute("style", "background-color: sandybrown;") 
    });
}



    


//end of button event listener  
});

//reloads page when clear button is clicked
const clearbtn = document.querySelector('#clear');
clearbtn.addEventListener('click', () => {
    window.location.reload();
});













   
  
