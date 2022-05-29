const container = document.querySelector('#container');

//makes 16 rows and stores in container div
for(let i = 1; i <= 16; i++){
const rows = document.createElement('div');
rows.classList.add(`row${i}`, 'row');
container.appendChild(rows);
}


//makes columns stay inline for each row
const allRows = document.querySelectorAll('div.row').forEach(element => {
    element.style.display = 'flex';
    
});


//adds 16 columns to each row 
for(let a = 1; a <= 16; a++ ){
    const cols = document.querySelector(`div.row${a}`);

    for(let i = 1; i <= 16; i++){
        const col = document.createElement('div');
        col.classList.add('col',`row1col${i}`);
        cols.appendChild(col);
    }

}

// to hover when mouuse over
const hover = document.querySelectorAll('.col');

for (let i = 0; i < hover.length; i++) {
    hover[i].addEventListener("mouseover", function() {
        hover[i].setAttribute("style", "background-color: black;") 
    });
}


// hover.addEventListener("mouseover", func, false);
// hover.addEventListener("mouseout", func1, false);

// function func()
// {  
//    hover.setAttribute("style", "background-color: black;")
// }

// function func1()
// {  
//    hover.setAttribute("style", "background-color: white;")
// }









   
  
